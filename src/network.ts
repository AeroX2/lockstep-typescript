import { DataConnection } from 'peerjs';

const Peer = require('peerjs');
let peer = new Peer();

export class Buffer { 
	private buffer: any[] = []
	private filled = false;

	constructor(
		private peer_id: string
	) {}
}

export class Network {
	private static reliable_connections: { [id: string]: DataConnection } = []
	private static unreliable_connections: { [id: string]: DataConnection } = []

	static open_socket(): void { 
		peer.on('open', (id: string) => console.log('My peer id is: ' + id));
		peer.on('connection', Network.connection_opened);
	}

	static connection_opened(conn: DataConnection) {
		if (conn.reliable) Network.reliable_connections[conn.peer] = conn
		else Network.unreliable_connections[conn.peer] = conn
	}

	static full_connect(peer_id: string): void {
		Network.open_reliable(peer_id);

		//TODO: Wait for promise resolution
		Network.open_unreliable(peer_id);

		//TODO: Create a buffer for the client
	}

	static open_reliable(peer_id: string): void {
		peer.connect(peer_id, { reliable: true });
	}

	static open_unreliable(peer_id: string): void {
		peer.connect(peer_id, { reliable: false });

		// Keep retrying until we get a connection
		setTimeout(() => {
			if (Network.unreliable_connections[peer_id] !== undefined) return
			Network.open_unreliable(peer_id)
		}, 1000)
	}

	static send_all_reliable(data: any) {
		for (let conn of Network.reliable_connections) conn.send(data);
	}
}
