import { Network } from './network';
import { Game } from './game';
import { UnreliablePacket } from './unreliable_packets';
import { StartPacket, PlayerPacket, ReliablePacket } from './reliable_packets';
import * as seedrandom from 'seedrandom';

export var Random: seedrandom.prng;

console.log('Starting up');
Network.open_socket().then(id => {
	let peer_id_text = document.getElementById('peer-id-display')
	peer_id_text.innerText = `Your peer ID is: ${id}`
})

let game = new Game();

//TODO: Probably a nicer way of doing this, instead of callbacks
let other_players: number = 0;
Network.reliable_callbacks.push((peer_id: string, data: ReliablePacket) => {
	console.log('Network callback')
	if (data instanceof StartPacket) {
		console.log('Received start command')
		Random = seedrandom(data.seed)

		//Acknowledge receiving the start packet
		Network.send_all_reliable(new PlayerPacket())
	} else if (data instanceof PlayerPacket) {
		other_players += 1

		// We have got everyones elses positions, now we can start the game
		if (other_players >= Network.mapping.size) {
			game.setup()
			loop();
		} 
	}
})

Network.unreliable_callbacks.push((peer_id: string, data: UnreliablePacket) => {
})

let connect_button = document.getElementById('connect-button');
connect_button.addEventListener('click', () => {
	let textbox = document.getElementById('textbox') as HTMLInputElement;
	Network.full_connect(textbox.value.trim());
});

let start_button = document.getElementById('start-button');
start_button.addEventListener('click', () => {
	console.log('Starting game')

	let starting_seed = Math.random().toString(36).substring(2)
	Network.send_all_reliable(new StartPacket(starting_seed))
	Network.send_all_reliable(new PlayerPacket())
	Random = seedrandom(starting_seed)
});

let loop = () => {
	setTimeout(() => {

		game.add_input()
		Network.send_input_buffer(game.old_input_buffer)
		
		if (Network.buffers.map(b => b.peek()).every(v => v && v.frame === Game.frame)) {
			game.simulate(Network.buffers.map(b => b.popleft()))
		}
		game.draw();
		
		window.requestAnimationFrame(loop)
	}, Game.FPS)
}