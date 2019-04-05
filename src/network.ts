import { DataConnection } from 'peerjs';
import { Buffer } from './buffer';
import { Game } from './game';
import { OtherClientsPacket, ReliablePacket } from './reliable_packets';
import { UnreliablePacket } from './unreliable_packets';

//TODO: Surely there is another way to resolve this
const Peer = require('peerjs');
let peer = new Peer.default();

export class Network {
	public static BUFFER_SIZE = 8;
	public static reliable_callbacks: Function[] = [];
	public static unreliable_callbacks: Function[] = [];
	public static mapping: Map<string, number> = new Map()

	private static index = 0;
	private static local_id: string;
	private static buffers: Buffer[] = [];

	private static reliable_connections: DataConnection[] = []
	private static unreliable_connections: DataConnection[] = []
	private static lowest_missing_frame: number[] = [];

	static open_socket(): void {
		peer.on('open', (id: string) => {
			console.log('My peer id is: ' + id)
			Network.local_id = id;
		});
		peer.on('connection', Network.connection_opened);
	}

	private static connection_opened(conn: DataConnection) {
		console.log(`${conn.reliable ? 'Reliable' : 'Unreliable'} Connection opened with ${conn.peer}`)
		let index = Network.mapping.get(conn.peer)
		if (index === undefined) {
			index = Network.index;

			Network.mapping.set(conn.peer, index);
			Network.buffers.push(new Buffer(conn.peer))
			Network.lowest_missing_frame.push(0);

			// Javascript is weird (let a = []; a[2] = 4; a == [empty,empty,4])
			// Network.reliable_connections.push(null)
			// Network.unreliable_connections.push(null)

			Network.index++;
		}

		if (conn.reliable) {
			Network.reliable_connections[index] = conn
			conn.on('open', () => {
				conn.on('data', (data: ReliablePacket) => { Network.receive_reliable(conn.peer, data) })

				// Tell the other client about all the others clients we are connected to
				if (Network.reliable_connections.length-1 > 0) {
					conn.send({ 'others': Network.reliable_connections.slice(0, -1).map(e => e.peer) })
				}
			});

		} else {
			Network.unreliable_connections[index] = conn
			conn.on('open', () => {
				conn.on('data', (data: UnreliablePacket) => { Network.receive_unreliable(conn.peer, data) })
			});
		}
	}

	static full_connect(peer_id: string): void {
		console.log(`Making a connection with ${peer_id}`)
		if (Network.local_id === peer_id) {
			console.log('Trying to make a connection with ourself');
			return;
		}

		if (Network.mapping.has(peer_id)) {
			console.log(`Network connection with ${peer_id} already opened`)
			return;
		}

		Network.mapping.set(peer_id, Network.index);
		Network.index++;

		//TODO: Wait for promise resolution
		Network.open_unreliable(peer_id);

		Network.open_reliable(peer_id);

		console.log(`Connection made with ${peer_id}`)
	}

	private static open_reliable(peer_id: string): void {
		let conn = peer.connect(peer_id, { reliable: true });
		conn.on('open', () => {
			Network.reliable_connections.push(conn)
			conn.on('data', (data: ReliablePacket) => { Network.receive_reliable(conn.peer, data) })
		});
	}

	private static open_unreliable(peer_id: string): void {
		let conn = peer.connect(peer_id, { reliable: false });
		conn.on('open', () => {
			Network.unreliable_connections.push(conn)
			conn.on('data', (data: UnreliablePacket) => { Network.receive_unreliable(conn.peer, data) })
		});

		// Keep retrying until we get a connection
		setTimeout(() => {
			let index = Network.mapping.get(peer_id)
			if (Network.unreliable_connections[index] !== undefined) return
			Network.open_unreliable(peer_id)
		}, 1000)
	}

	private static receive_reliable(peer_id: string, data: ReliablePacket) {
		console.log('Received reliable: ', data)
		data = ReliablePacket.convert(data)

		if (data instanceof OtherClientsPacket) {
			for (let peer_id of data.others) Network.full_connect(peer_id)
		}
		for (let callback of Network.reliable_callbacks) callback(peer_id, data);
	}

	private static receive_unreliable(peer_id: string, data: UnreliablePacket) {
		console.log('Received unreliable: ', data)
		data = UnreliablePacket.convert(data)
		// if (data['frame'] !== undefined) {
		// 	if (data.frame < game.frame) return;

		// 	let index = Network.mapping.get(peer_id)
		// 	let buffer = Network.buffers[index];
		// 	buffer.add(data)
		// 	Network.lowest_missing_frame[index] = buffer.find_lowest(game.frame);
		// }

		// for (let callback of Network.unreliable_callbacks) callback(peer_id, data);
	}

	static send_all_reliable(data: ReliablePacket) {
		let raw_data = data.raw();
		for (let conn of Network.reliable_connections) conn.send(raw_data);
	}

	static send_input_buffer(buffer: Buffer) {
		for (let index = 0; index < Network.unreliable_connections.length; index++) {
			let conn = Network.unreliable_connections[index];
			for (let input of buffer.items()) {

				let input_copy = Object.assign({ack: 0}, input)
				if (input.frame >= Network.lowest_missing_frame[index]) {
					conn.send(input_copy)
				}
			}
		}
	}

	//TODO: Promise resolution
	static wait_for_buffers(): any {
	}
}
