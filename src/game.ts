import { Entity } from './entity'
import { Player, OtherPlayer } from './player'
import { Ball } from './ball'
import { InputPacket } from './unreliable_packets';
import { Buffer } from './buffer';
import { Network } from './network';

export class Game {
	//TODO: Make this not a static variable?
	public static frame: number = 0;
	public static entity_id: number = 0;

	private running = false;
	private entities: Entity[] = []
	private canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
	private ctx: CanvasRenderingContext2D = this.canvas.getContext('2d')
 
	public current_input: InputPacket = new InputPacket(0, false, false, false, false);
	private input_buffer: Buffer = new Buffer('');
	public old_input_buffer: Buffer = new Buffer('');
 
	private local_player: Player = null;
	private other_players: OtherPlayer[] = null;

	new_player(): Player {
		let x = Math.round(Math.random()*this.canvas.width)
		let y = Math.round(Math.random()*this.canvas.height/2+this.canvas.height/2)
		this.local_player = new Player(x,y)
		return this.local_player;
	}

	setup(other_players: OtherPlayer[]): void {
		if (this.running) {
			throw "Setup has been called twice something has gone horribly wrong"
		} 
		this.running = true;

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
			if (e.key === 'ArrowUp') this.current_input.up = true;
			if (e.key === 'ArrowDown') this.current_input.down = true;
			if (e.key === 'ArrowLeft') this.current_input.left = true;
			if (e.key === 'ArrowRight') this.current_input.right = true;
		}

		window.onkeyup = (e) => {
			if (e.key === 'ArrowUp') this.current_input.up = false;
			if (e.key === 'ArrowDown') this.current_input.down = false;
			if (e.key === 'ArrowLeft') this.current_input.left = false;
			if (e.key === 'ArrowRight') this.current_input.right = false;
		}
	}

	simulate(other_inputs: InputPacket[]): void {
		this.local_player.input(this.input_buffer.popleft());
		for (let i = 0; i < other_inputs.length; i++) this.other_players[i].input(other_inputs[i])

		this.update();

		Game.frame++;
	}

	update(): void {
		for (let entity of this.entities) entity.update(this.canvas);

		for (let entity of this.entities) {

			// Ignore players for the moment
			if (entity instanceof Player) continue;

			for (let other_entity of this.entities) {
				if (entity === other_entity) continue;
				if (entity.collides(other_entity)) entity.collision(other_entity)
			}
		}
	}

	draw(): void {
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
		for (let entity of this.entities) entity.draw(this.ctx);
	}

	add_input(): void {
		if (this.input_buffer.length() < Network.BUFFER_SIZE) {
			let input_copy = Object.create(this.current_input)
			input_copy = Object.assign(input_copy, this.current_input)

			this.input_buffer.add(input_copy);
			this.old_input_buffer.add(input_copy);
			this.current_input.frame++;
		} 
	}
}
