import { Game } from "./game";
import { Network } from "../network/network";
import { InputPacket } from "../network/unreliable_packets";

export class GameTesting extends Game {

	public constructor() {
		super();
		this.canvas = Object.create(HTMLCanvasElement);
		this.canvas.width = 800;
		this.canvas.height = 700;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public simulate(_: InputPacket[]): void {
		this.input_buffer.popleft()

		let frame = Game.frame * Game.FPS
		let start = Game.GAME_START_COUNTDOWN
		let end = start + Game.GAME_END_COUNTDOWN
		let restart = end + Game.GAME_END_SCORE_COUNTDOWN

		if (frame > restart) {
			//Restart the game
			Network.reset()
			this.setup()
		}

		Game.frame++
	}

	public draw(): void {}

	public add_input(): void {
		if (this.input_buffer.length() < Network.BUFFER_SIZE) {
			console.log('Adding frame:', this.current_input.raw())
			let input_copy = Object.create(this.current_input)
			input_copy = Object.assign(input_copy, this.current_input)
			this.input_buffer.add(input_copy)

			let input_copy2 = Object.create(this.current_input)
			input_copy2 = Object.assign(input_copy2, this.current_input)
			this.old_input_buffer.add(input_copy2)

			this.current_input.frame++
		}
	}
}