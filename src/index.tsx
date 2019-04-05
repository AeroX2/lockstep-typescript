import { Network } from './network';
import { Game } from './game';
import { Player, OtherPlayer } from './player';

console.log('Starting up');
Network.open_socket()
let game = new Game();

//TODO: Probably a nicer way of doing this, instead of callbacks
let other_players: OtherPlayer[] = []
Network.reliable_callbacks.push((peer_id: string, data: any) => {
	console.log('Network callback')
	if (data === 'start') {
		console.log('Received start command')
		let player = game.new_player();
		Network.send_all_reliable({'player': {x: player.x, y: player.y}});
	} else if (data['player'] !== undefined) {
		console.log('Received player coords')

		let player = data['player']
		other_players.push(new OtherPlayer(player.x, player.y))

		// We have got everyones elses positions, now we can start the game
		if (other_players.length >= Object.keys(Network.mapping).length) {
			game.setup(other_players)
			loop();
		} 
	}
})

Network.unreliable_callbacks.push((peer_id: string, data: any) => {
	if (data['frame'] !== undefined) {
		
	}
})

let connect_button = document.getElementById('connect-button');
connect_button.addEventListener('click', () => {
	let textbox = document.getElementById('textbox') as HTMLInputElement;
	Network.full_connect(textbox.value);

	let start_button = document.getElementById('send-button');
	start_button.addEventListener('click', () => {
		console.log('Starting game')
		Network.send_all_reliable('start')

		let player = game.new_player();
		Network.send_all_reliable({'player': {x: player.x, y: player.y}});
	});
});

let fps = 1000/60
let loop = () => {
	setTimeout(() => {

		game.add_input()
		Network.send_input_buffer(game.input_buffer)
		
		if (false) {
			game.simulate([])
		}
		game.draw();
		
		window.requestAnimationFrame(loop)
	}, fps)
}