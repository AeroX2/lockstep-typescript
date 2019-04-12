import { Network } from './network/network'
import { StartPacket, PlayerPacket, ReliablePacket } from './network/reliable_packets'
import * as seedrandom from 'seedrandom'
import { GameTesting } from './game/game_testing';
import { Utils } from './utils';

export var Random: seedrandom.prng

console.log('Starting up')
Network.open_socket()
let connect_button = document.getElementById('connect-button')
connect_button.addEventListener(
	'click',
	(): void => {
		let textbox = document.getElementById('textbox') as HTMLInputElement
		Network.full_connect(textbox.value.trim())
	}
)

let game = new GameTesting()
let loop = (): void => {
	setTimeout(() => {
		game.add_input()
		Network.send_input_buffer(game.old_input_buffer)

		if (Network.buffers.map(b => b.peek()).every(v => v && v.frame === GameTesting.frame)) {
			game.simulate(Network.buffers.map(b => b.popleft()))
		}

		window.requestAnimationFrame(loop)
	}, GameTesting.FPS)
}

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
		// We have got everyones elses positions, now we can start the game
		if (other_players >= Network.mapping.size && setup_not_run) {
			setup_not_run = false;
			game.setup()
			loop()
		}
	}
})

