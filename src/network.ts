import { DataConnection } from 'peerjs';

const Peer = require('peerjs');
let peer = new Peer.default();

export class Network {
	public static BUFFER_SIZE = 8;

	private static index = 0;
	private static mapping: { [id: string]: number } = {}
	private static buffers: Buffer[] = [];
	private static reliable_connections: DataConnection[] = []
	private static unreliable_connections: DataConnection[] = []

	static open_socket(): void {
		peer.on('open', (id: string) => {
			console.log('My peer id is: ' + id)

			Network.mapping[id] = Network.index;
			Network.index++;
		});
		peer.on('connection', Network.connection_opened);
	}

	private static connection_opened(conn: DataConnection) {
		console.log(`${conn.reliable ? 'Reliable' : 'Unreliable'} Connection opened with ${conn.peer}`)
		let index = Network.mapping[conn.peer]
		if (index === undefined) {
			index = Network.index;

			Network.mapping[conn.peer] = index
			Network.buffers.push(new Buffer(conn.peer))
			Network.reliable_connections.push(null)
			Network.unreliable_connections.push(null)

			Network.index++;
		}

		if (conn.reliable) {
			Network.reliable_connections[index] = conn
			conn.on('open', () => {
				conn.on('data', Network.receive_reliable)

				// Tell the other client about all the others clients we are connected to
				conn.send({ 'others': Network.reliable_connections.slice(0,-1).map(e => e.peer) })
			});

		} else {
			Network.unreliable_connections[index] = conn
			conn.on('open', () => {
				conn.on('data', Network.receive_unreliable)
			});
		}
	}

	static full_connect(peer_id: string): void {
		console.log(`Making a connection with ${peer_id}`)

		if (Network.mapping[peer_id] !== undefined) {
			console.log(`Network connection with ${peer_id} already opened`)
			return;
		}

		Network.mapping[peer_id] = Network.index;
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
			conn.on('data', Network.receive_reliable)
		});
	}

	private static open_unreliable(peer_id: string): void {
		let conn = peer.connect(peer_id, { reliable: false });
		conn.on('open', () => {
			Network.unreliable_connections.push(conn)
			conn.on('data', Network.receive_unreliable)
		});

		// Keep retrying until we get a connection
		setTimeout(() => {
			let index = Network.mapping[peer_id]
			if (Network.unreliable_connections[index] !== undefined) return
			Network.open_unreliable(peer_id)
		}, 1000)
	}

	private static receive_reliable(data: any) {
		if (data['others'] !== undefined) {
			for (let peer_id of data['others']) Network.full_connect(peer_id)
		}
	}

	private static receive_unreliable(data: any) {

	}

	static send_all_reliable(data: any) {
		for (let conn of Object.values(Network.reliable_connections)) conn.send(data);
	}

	//TODO: Promise resolution
	static wait_for_buffers(): any {
	}
}
