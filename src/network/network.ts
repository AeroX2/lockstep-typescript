import { DataConnection } from 'peerjs'
import { Buffer } from './buffer'
import { Game } from '../game/game'
import { OtherClientsPacket, ReliablePacket } from './reliable_packets'
import { UnreliablePacket, AckPacket, InputPacket } from './unreliable_packets'

import PeerJs from 'peerjs'
let peer = new PeerJs(null)
export class Network {
	public static BUFFER_SIZE = 8
	public static RETRY_AMOUNT = 5

	public static reliable_callbacks: Function[] = []
	public static unreliable_callbacks: Function[] = []
	public static mapping: Map<string, number> = new Map()

	private static index = 0
	public static local_id: string
	public static buffers: Buffer[] = []

	private static reliable_connections: DataConnection[] = []
	private static unreliable_connections: DataConnection[] = []

	private static frame_we_are_missing: number[] = []
	private static frame_they_are_missing: number[] = []

	public static reset(): void {
		this.frame_we_are_missing = []
		this.frame_they_are_missing = []
		for (let buffer of this.buffers) {
			buffer.clear()
			this.frame_we_are_missing.push(0);
			this.frame_they_are_missing.push(0);
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
			Network.frame_we_are_missing.push(0)
			Network.frame_they_are_missing.push(0);
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
		data = UnreliablePacket.convert(data)
		if (data instanceof InputPacket) {
			if (data.game < Game.game) return
			if (data.frame < Game.frame) return

			let index = Network.mapping.get(peer_id)
			let buffer = Network.buffers[index]
			buffer.add(data)
			Network.frame_we_are_missing[index] = buffer.find_lowest(Game.frame)
		} else if (data instanceof AckPacket) {
			//TODO: We should come up with a better system of removing old packets
			//FIXME
			let index = Network.mapping.get(peer_id)
			let v = Network.frame_they_are_missing[index]
			if (v === data.ack) Network.frame_they_are_missing[index] += 1
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

			let lowest_ack = Network.frame_they_are_missing[index]
			for (let input of data) {
				if (input.frame >= lowest_ack) {
					if (Math.random() >= packet_loss) conn.send(input)
					else console.log('Simulating a lost packet')
				}
			}

			let lowest_frame = Network.frame_we_are_missing[index] || 0
			conn.send(new AckPacket(lowest_frame).raw())
		}

		// console.log(Network.frame_they_are_missing.join())
		let lowest_frame_r = Math.min(...Network.frame_they_are_missing)
		buffer.remove_old(lowest_frame_r)
	}
}
