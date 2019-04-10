import { Network } from './network';
import { Game } from './game';
import { Player, OtherPlayer } from './player';
import { UnreliablePacket } from './unreliable_packets';
import { StartPacket, PlayerPacket, ReliablePacket } from './reliable_packets';

console.log('Starting up');
Network.open_socket().then(id => {
	let peer_id_text = document.getElementById('peer-id-display')
	peer_id_text.innerText = `Your peer ID is: ${id}`
})

let game = new Game();

//TODO: Probably a nicer way of doing this, instead of callbacks
let other_players: OtherPlayer[] = []
Network.reliable_callbacks.push((peer_id: string, data: ReliablePacket) => {
	console.log('Network callback')
	if (data instanceof StartPacket) {
		console.log('Received start command')
		let player = game.new_player();
		Network.send_all_reliable(new PlayerPacket(player.x, player.y, player.colour));
	} else if (data instanceof PlayerPacket) {
		console.log('Received player coords')

		other_players.push(new OtherPlayer(data.x, data.y, data.colour))

		// We have got everyones elses positions, now we can start the game
		if (other_players.length >= Network.mapping.size) {
			game.setup(other_players)
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
	Network.send_all_reliable(new StartPacket())

	let player = game.new_player();
	Network.send_all_reliable(new PlayerPacket(player.x, player.y, player.colour));
});

let fps = 1000/60
let loop = () => {
	setTimeout(() => {

		game.add_input()
		Network.send_input_buffer(game.old_input_buffer)
		
		if (Network.buffers.map(b => b.peek()).every(v => v && v.frame === Game.frame)) {
			game.simulate(Network.buffers.map(b => b.popleft()))
		}
		game.draw();
		
		window.requestAnimationFrame(loop)
	}, fps)
}