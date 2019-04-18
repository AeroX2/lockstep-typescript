import { Network } from './network/network'
import { Game } from './game/game'
import { StartPacket, PlayerPacket, ReliablePacket, ChecksumPacket } from './network/reliable_packets'
import { Utils } from './utils'
import objectHash from 'object-hash';

console.log('Starting up')
Network.open_socket().then(id => {
	let peer_id_text = document.getElementById('peer-id-display')
	peer_id_text.innerText = `Your peer ID is: ${id}`
})

let game = new Game()
let checksums: { [id: number]: string } = []

let loop = (): void => {
	setTimeout(() => {
		game.add_input()

		let slider = document.getElementById('packet-loss-slider') as HTMLInputElement
		let sliderValue = parseInt(slider.value) / 100.0
		document.getElementById('packet-loss-display').innerText = `Packet loss: ${sliderValue}`
		Network.send_input_buffer(game.old_input_buffer, sliderValue)

		if (Network.buffers.map(b => b.peek()).every(v => v && v.frame === Game.frame)) {
			game.simulate(Network.buffers.map(b => b.popleft()))

			Network.send_checksum(game.entities)

			let hash = '';
			for (let entity of game.entities.slice(4)) {
				hash += objectHash({x: entity.x.toNumber(), y: entity.y.toNumber()})
				hash = objectHash(hash)
			}
			checksums[Game.frame-1] = hash;
		}
		game.draw()

		window.requestAnimationFrame(loop)
	}, Game.FPS)
}

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
		// We have got everyones elses positions, now we can start the game
		if (other_players >= Network.mapping.size && setup_not_run) {
			setup_not_run = false;
			game.setup()
			loop()
		}
	} else if (data instanceof ChecksumPacket) {
		if (!checksums[data.frame]) return;
		if (data.checksum !== checksums[data.frame]) {
			console.error("Checksum ERROR!")
			debugger;
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
		Utils.set_random_seed(starting_seed)
	}
)
