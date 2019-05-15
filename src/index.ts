import { Network } from './network/network'
import { Game } from './game/game'
import { StartPacket, PlayerPacket, ReliablePacket } from './network/reliable_packets'
import { Utils } from './utils'
import { Lobby } from './network/lobby';
import { Button } from './ui/button';

//TODO: This file is a mess, a refactor is needed.

console.log('Starting up')
Network.open_socket().then((id) => {
	console.log(`Peer ID is ${id}`)
})

let canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
let ctx: CanvasRenderingContext2D = canvas ? canvas.getContext('2d') : null
let game = new Game(canvas)

let game_started = false;
let lobby_started = false;

let unique_lobbies: Set<string> = new Set();
let lobby_list = document.getElementById('lobby-list');

let lobby_loop = (): void => {
	ctx.clearRect(0,0,canvas.width,canvas.height);

	let connections = Math.min(Network.mapping.size, Network.unreliable_connections.length, Network.reliable_connections.length)+1
	ctx.fillText(`${connections}/4 clients connected`, canvas.width/2, 200)

	start_button.update(canvas);
	start_button.draw(ctx);

	setTimeout(() => {
		if (!game_started) lobby_loop();
	}, 100)
}
let start_lobby = (): void => {
	lobby_list.parentElement.style.display = 'none';
	lobby_started = true;
	lobby_loop();
}

let menu_loop = (): void => {
	Lobby.get_lobbies(Network.local_id).then((v) => {
		for (let lobby of v.lobbies) {
			if (!unique_lobbies.has(lobby)) {
				unique_lobbies.add(lobby);

				let button = document.createElement('BUTTON');
				button.innerText = lobby;
				button.classList.add('lobby-button')
				button.onclick = () => {
					Lobby.connect_lobby(lobby).then((v) => {
						Network.full_connect(v.lobby)
						start_lobby();
					})
				}
				lobby_list.appendChild(button);

				let break_e = document.createElement('BR');
				lobby_list.appendChild(break_e);
			}
		}
	})

	setTimeout(() => {
		if (!lobby_started) menu_loop();
	}, 1000)
}
menu_loop();

let game_loop = (): void => {
	game_started = true;
	setTimeout(() => {

		// Make sure the setup has been run before starting running the game
		if (!setup_not_run) {
			game.add_input()

			//let slider = document.getElementById('packet-loss-slider') as HTMLInputElement
			//let sliderValue = parseInt(slider.value) / 100.0
			//document.getElementById('packet-loss-display').innerText = `Packet loss: ${sliderValue}`

			Network.send_input_buffer(game.old_input_buffer, 0)

			if (Network.buffers.map(b => b.peek()).every(v => v && v.frame === Game.frame)) {
				game.simulate(Network.buffers.map(b => b.popleft()))
			}
			game.draw()
		}

		window.requestAnimationFrame(game_loop)
	}, Game.FPS)
}

let start_button: Button = new Button(canvas.width / 2,
	500,
	500,
	100,
	"Start",
	() => { 
		//if (Network.mapping.size === 0) return;
		//if (Network.reliable_connections.length !== Network.unreliable_connections.length) return;

		let starting_seed = Math.random()
			.toString(36)
			.substring(2)
		Network.send_all_reliable(new StartPacket(starting_seed))
		Network.send_all_reliable(new PlayerPacket())
		Utils.set_random_seed(starting_seed)
	}
)

//TODO: Probably a nicer way of doing this, instead of callbacks
let other_players = 0
let setup_not_run = true;
Network.reliable_callbacks.push((_: string, data: ReliablePacket) => {
	if (data instanceof StartPacket) {
		console.log('Received start command with seed:', data.seed)
		Utils.set_random_seed(data.seed)

		//Acknowledge receiving the start packet
		Network.send_all_reliable(new PlayerPacket())
	} else if (data instanceof PlayerPacket) {
		console.log('Received PlayerPacket acknowledgement command')

		other_players += 1

		// Once we have got everyones elses positions, we can start the game
		if (other_players >= Network.mapping.size-1 && setup_not_run) {
			setup_not_run = false;
			game.setup()
			game_loop()
		}
	}
})

let lobby_textbox = document.getElementById('lobby-name') as HTMLInputElement
let create_lobby_button = document.getElementById('create-lobby-button')
create_lobby_button.addEventListener(
	'click',
	(): void => {
		Network.blub();

		Lobby.create_lobby(Network.local_id, lobby_textbox.value)
			.then(() => {
				start_lobby();
			})
			.catch((r) => {
				console.log(r);
			})
	}
)
