import { DataConnection } from 'peerjs'
import { Buffer } from './buffer'
import { Game } from '../game/game'
import { OtherClientsPacket, ReliablePacket, ChecksumPacket } from './reliable_packets'
import { UnreliablePacket, AckPacket, InputPacket } from './unreliable_packets'
import PeerJs from 'peerjs'
import { Entity } from '../game/entity';
import objectHash from 'object-hash';
import { Lobby } from './lobby';

let peer = new PeerJs(null, {
	host: '/',
	path: '/peerjs',
	port: Lobby.PEER_PORT,
	config: {'iceServers': [
		{ urls: 'stun:lockstep.zapto.org:443' },
		{ urls: 'turn:lockstep.zapto.org:443', username: 'james', credential: 'groot' }
		],
		iceTransportPolicy: "all"
	}
});
export class Network {
	public static BUFFER_SIZE = 11
	public static RETRY_AMOUNT = 5

	public static ignore_packets: boolean = false;

	public static reliable_callbacks: Function[] = []
	public static unreliable_callbacks: Function[] = []
	public static mapping: Map<string, number> = new Map()

	private static index = 0
	public static local_id: string
	public static buffers: Buffer[] = []

	public static reliable_connections: DataConnection[] = []
	public static unreliable_connections: DataConnection[] = []

	private static received_frames: number[][] = [];
	private static acknowledged_frames: number[][] = [];

	public static reset(): void {
		Network.received_frames = []
		Network.acknowledged_frames = []
		for (let buffer of Network.buffers) {
			buffer.clear()
			Network.received_frames.push([])
			Network.acknowledged_frames.push([])
		}
	}

	public static open_socket(): Promise<string> {
		return new Promise(resolve => {
			peer.on('open', (id: string) => {
				console.log('My peer id is: ' + id)
				Network.local_id = id
				resolve(id)
			})
			peer.on('connection', Network.connection_opened)
		})
	}

	private static connection_setup(peer_id: string): Promise<void> {
		return new Promise(resolve => {
			Network.mapping.set(peer_id, Network.index++)
			Network.buffers.push(new Buffer())
			Network.received_frames.push([])
			Network.acknowledged_frames.push([])
			resolve();
		})
	}

	private static connection_opened(conn: DataConnection): void {
		console.log(`${conn.reliable ? 'Reliable' : 'Unreliable'} Connection opened with ${conn.peer}`)
		let index = Network.mapping.get(conn.peer)
		if (index === undefined) {
			index = Network.index
			Network.connection_setup(conn.peer)

			// Javascript is weird (let a = []; a[2] = 4; a == [empty,empty,4])
			// Network.reliable_connections.push(null)
			// Network.unreliable_connections.push(null)
		}

		if (conn.reliable) {
			Network.reliable_connections.push(conn);
			conn.on('open', () => {
				conn.on('data', (data: ReliablePacket) => {
					Network.receive_reliable(conn.peer, data)
				})

				// Tell the other client about all the others clients we are connected to
				if (Network.reliable_connections.length - 1 > 0) {
					let packet = new OtherClientsPacket(Network.reliable_connections.slice(0, -1).map(e => e.peer))
					conn.send(packet.raw())
				}
			})
		} else {
			Network.unreliable_connections.push(conn)
			conn.on('open', () => {
				conn.on('data', (data: UnreliablePacket) => {
					Network.receive_unreliable(conn.peer, data)
				})
			})
		}
	}

	public static full_connect(peer_id: string): void {
		console.log(`Making a connection with ${peer_id}`)
		if (Network.local_id === peer_id) {
			console.log('Trying to make a connection with ourself')
			return
		}

		if (Network.mapping.has(peer_id)) {
			console.log(`Network connection with ${peer_id} already opened`)
			return
		}

		Network.connection_setup(peer_id)
			.then(() => Network.open_reliable(peer_id))
			.then(() => Network.open_unreliable(peer_id))
			.then(() => console.log(`Connection made with ${peer_id}`))
			.catch(() => {
				console.log(`Unable to make connection made with ${peer_id}`)
				Network.mapping.delete(peer_id)
				if (Network.reliable_connections.length === Network.index) Network.reliable_connections.pop();
				if (Network.unreliable_connections.length === Network.index) Network.unreliable_connections.pop();
				Network.index--;
			})
	}

	private static open_reliable(peer_id: string): Promise<void> {
		return new Promise(async resolve => {
			let conn = peer.connect(peer_id, { reliable: true })
			conn.on('open', () => {
				Network.reliable_connections.push(conn)
				conn.on('data', (data: ReliablePacket) => {
					Network.receive_reliable(conn.peer, data)
				})
				resolve()
			})
			conn.on('error', (error: string) => {
				throw new Error(`Unable to make reliable connection: ${error}`)
			})
		})
	}

	private static open_unreliable(peer_id: string): Promise<void> {
		return new Promise(async resolve => {
			let conn = peer.connect(peer_id)
			conn.on('open', () => {
				Network.unreliable_connections.push(conn)
				conn.on('data', (data: UnreliablePacket) => {
					Network.receive_unreliable(conn.peer, data)
				})
				resolve()
			})
			conn.on('error', (error: string) => {
				throw new Error(`Unable to make unreliable connection: ${error}`)
			})
		})
	}

	private static receive_reliable(peer_id: string, data: ReliablePacket): void {
		console.log('Received reliable: ', data)
		data = ReliablePacket.convert(data)

		if (data instanceof OtherClientsPacket) {
			for (let peer_id of data.others) Network.full_connect(peer_id)
		}
		for (let callback of Network.reliable_callbacks) callback(peer_id, data)
	}

	private static receive_unreliable(peer_id: string, data: UnreliablePacket): void {
		if (Network.ignore_packets) return;

		data = UnreliablePacket.convert(data)
		if (data instanceof InputPacket) {
			if (data.game < Game.game) return
			if (data.frame < Game.frame) return

			let index = Network.mapping.get(peer_id)
			let buffer = Network.buffers[index]
			buffer.add(data)

			let recv = Network.received_frames[index]
			if (!recv.includes(data.frame)) recv.push(data.frame)	
		} else if (data instanceof AckPacket) {
			if (data.game < Game.game) return

			let index = Network.mapping.get(peer_id)
			for (let frame of data.received_frames) {
				if (!Network.acknowledged_frames[index].includes(frame)) Network.acknowledged_frames[index].push(frame)
			}
		}

		for (let callback of Network.unreliable_callbacks) callback(peer_id, data)
	}

	public static send_all_reliable(data: ReliablePacket): void {
		let raw_data = data.raw()
		for (let conn of Network.reliable_connections) {
			//TODO: Find out why the connection is not stabilizing here
			if (conn) conn.send(raw_data)
		} 
	}

	public static send_input_buffer(buffer: Buffer, packet_loss: number = 0): void {

		let data = buffer.items().map(v => v.raw())
		for (let index = 0; index < Network.unreliable_connections.length; index++) {
			let conn = Network.unreliable_connections[index]


			for (let input of data) {
				if (!Network.acknowledged_frames.includes(input)) {
					if (Math.random() >= packet_loss) conn.send(input)
					else console.log('Simulating a lost packet')
				}
			}

			conn.send(new AckPacket(Game.game, Network.received_frames[index]).raw())
			Network.received_frames[index] = [];
		}
		
		// console.log(Network.acknowledged_frames.map(v => v.length).join(' '))

		// Prune the acknowledged frames
		for (let frame of Network.acknowledged_frames[0]) {
			let ignore = false;
			for (let array of Network.acknowledged_frames) {
				if (!array.includes(frame)) {
					ignore = true;
					break;
				}
			}
			if (!ignore) {
				for (let array of Network.acknowledged_frames) {
					array.splice(array.indexOf(frame), 1);
				}
				let index = buffer.items().map(v => v.frame).indexOf(frame)
				if (index !== -1) buffer.items().splice(index, 1)
			}
		}

		// Prune old results
		for (let array of Network.acknowledged_frames) {
			for (let i = 0; i < array.length; i++) {
				let frame = array[i];
				if (frame < Game.frame - Network.BUFFER_SIZE) {
					array.splice(i, 1)	
				}
			}
		}
	}

	public static send_checksum(entities: Entity[]): void {
		let hash = '';
		for (let entity of entities.slice(4)) {
			hash += objectHash({x: entity.x.toNumber(), y: entity.y.toNumber()})
			hash = objectHash(hash)
		}
		for (let index = 0; index < Network.reliable_connections.length; index++) {
			let conn = Network.reliable_connections[index]
			conn.send(new ChecksumPacket(Game.frame-1, hash).raw());
		}
	}
}
