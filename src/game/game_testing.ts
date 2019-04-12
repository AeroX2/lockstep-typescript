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
}