import { Entity } from './entity'
import { Player, OtherPlayer } from './player'
import { Ball } from './ball'
import { Input } from './input';
import { Buffer } from './buffer';

export class Game {
	frame: number = 0;
	entities: Entity[] = []
	canvas: HTMLCanvasElement = null
	ctx: CanvasRenderingContext2D = null

	current_input: Input = new Input(0, false, false, false, false);
	local_player: Player = null;
	input_buffer: Buffer = new Buffer('');
	other_players: OtherPlayer[] = null;

	setup(other_players: OtherPlayer[]): void {
		this.canvas = document.getElementById('canvas') as HTMLCanvasElement
		this.ctx = this.canvas.getContext('2d')

		this.local_player = new Player()
		this.other_players = other_players;

		this.entities.push(this.local_player)
		this.entities = this.entities.concat(other_players)

		let sp = 2;
		let br = 20;
		let balls = [new Ball(400, 250)]

		balls.push(new Ball(balls[0].x - br - sp, balls[0].y - br * 2))
		balls.push(new Ball(balls[0].x + br + sp, balls[0].y - br * 2))

		balls.push(new Ball(balls[0].x - br * 2 - sp, balls[0].y - br * 4))
		balls.push(new Ball(balls[0].x, balls[0].y - br * 4))
		balls.push(new Ball(balls[0].x + br * 2 + sp, balls[0].y - br * 4))

		balls.push(new Ball(balls[0].x - br - sp, balls[0].y - br * 6))
		balls.push(new Ball(balls[0].x - br * 3 - sp * 2, balls[0].y - br * 6))
		balls.push(new Ball(balls[0].x + br + sp, balls[0].y - br * 6))
		balls.push(new Ball(balls[0].x + br * 3 + sp * 2, balls[0].y - br * 6))

		this.entities = this.entities.concat(balls);

		window.onkeydown = (e) => {
			if (e.key == 'ArrowUp') this.current_input.up = true;
			if (e.key == 'ArrowDown') this.current_input.down = true;
			if (e.key == 'ArrowLeft') this.current_input.left = true;
			if (e.key == 'ArrowRight') this.current_input.right = true;
		}

		window.onkeyup = (e) => {
			if (e.key == 'ArrowUp') this.current_input.up = false;
			if (e.key == 'ArrowDown') this.current_input.down = false;
			if (e.key == 'ArrowLeft') this.current_input.left = false;
			if (e.key == 'ArrowRight') this.current_input.right = false;
		}
	}

	simulate(other_inputs: Input[]): void {
		this.local_player.input(this.input_buffer.popleft());
		for (let i = 0; i < other_inputs.length; i++) this.other_players[i].input(other_inputs[i])

		this.update();
		this.draw();

		this.frame++;
	}

	update(): void {
		for (let entity of this.entities) entity.update(this.canvas);
	}

	draw(): void {
		for (let entity of this.entities) entity.draw(this.ctx);
	}
}
