import { Network } from './network/network'
import { Game } from './game/game'
import { StartPacket, PlayerPacket, ReliablePacket } from './network/reliable_packets'
import * as seedrandom from 'seedrandom'

export var Random: seedrandom.prng

console.log('Starting up')
Network.open_socket().then(id => {
	let peer_id_text = document.getElementById('peer-id-display')
	peer_id_text.innerText = `Your peer ID is: ${id}`
})

let game = new Game()

let loop = (): void => {
	setTimeout(() => {
		game.add_input()
		Network.send_input_buffer(game.old_input_buffer)

		if (Network.buffers.map(b => b.peek()).every(v => v && v.frame === Game.frame)) {
			game.simulate(Network.buffers.map(b => b.popleft()))
		}
		game.draw()

		window.requestAnimationFrame(loop)
	}, Game.FPS)
}

//TODO: Probably a nicer way of doing this, instead of callbacks
let other_players = 0
Network.reliable_callbacks.push((_: string, data: ReliablePacket) => {
	if (data instanceof StartPacket) {
		console.log('Received start command')
		Random = seedrandom(data.seed)

		//Acknowledge receiving the start packet
		Network.send_all_reliable(new PlayerPacket())
	} else if (data instanceof PlayerPacket) {
		console.log('Received PlayerPacket acknowledgement command')

		other_players += 1
		// We have got everyones elses positions, now we can start the game
		if (other_players >= Network.mapping.size) {
			game.setup()
			loop()
		}
	}
})

let connect_button = document.getElementById('connect-button')
connect_button.addEventListener(
	'click',
	(): void => {
		let textbox = document.getElementById('textbox') as HTMLInputElement
		Network.full_connect(textbox.value.trim())
	}
)

let start_button = document.getElementById('start-button')
start_button.addEventListener(
	'click',
	(): void => {
		console.log('Starting game')

		let starting_seed = Math.random()
			.toString(36)
			.substring(2)
		Network.send_all_reliable(new StartPacket(starting_seed))
		Network.send_all_reliable(new PlayerPacket())
		Random = seedrandom(starting_seed)
	}
)
