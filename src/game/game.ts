import { Entity } from './entity'
import { Player, OtherPlayer } from './player'
import { Ball } from './ball'
import { InputPacket } from '../network/unreliable_packets';
import { Buffer } from '../network/buffer';
import { Network } from '../network/network';
import { Random } from '..';

export class Game {
	public static FPS = 1000 / 60;
	public static GAME_START_COUNTDOWN = 3000;
	public static GAME_END_COUNTDOWN = 60000;
	public static GAME_END_SCORE_COUNTDOWN = 2000;

	//TODO: Make this not a static variable?
	public static frame: number;
	public static entity_id: number;

	private entities: Entity[];
	private canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
	private ctx: CanvasRenderingContext2D = this.canvas.getContext('2d')

	public current_input: InputPacket;
	private input_buffer: Buffer;
	public old_input_buffer: Buffer;

	private local_player: Player;
	private other_players: OtherPlayer[];
	private balls: Ball[];

	private scores: Map<number, number>;
	private max_scores: number[];

	public setup(): void {
		Game.frame = 0;
		Game.entity_id = 0;

		this.current_input = new InputPacket(0, false, false, false, false);
		this.input_buffer = new Buffer();
		this.old_input_buffer = new Buffer();

		this.other_players = [];
		let sorted_mapping = (Array.from(Network.mapping.keys()).concat(Network.local_id)).sort()
		for (let client of sorted_mapping) {
			let random_range = (min: number, max: number): number => {
				return Math.floor(Random() * (max-min) + min) 
			}
			let x = random_range(Player.RADIUS, this.canvas.width-Player.RADIUS)
			let y = random_range(this.canvas.height/2, this.canvas.width-Player.RADIUS)

			if (client === Network.local_id) this.local_player = new Player(x, y);
			else this.other_players[Network.mapping.get(client)] = new OtherPlayer(x, y);
		}

		this.entities = [];
		this.entities.push(this.local_player)
		this.entities = this.entities.concat(this.other_players)

		this.scores = new Map();
		for (let entity of this.entities) this.scores.set(entity.id, 0);
		this.max_scores = [-1]

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

		this.balls = balls;
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

	public simulate(other_inputs: InputPacket[]): void {
		let v = this.input_buffer.popleft();

		let frame = Game.frame * Game.FPS;
		let start = Game.GAME_START_COUNTDOWN;
		let end = start + Game.GAME_END_COUNTDOWN;
		let restart = end + Game.GAME_END_SCORE_COUNTDOWN;

		if (frame <= start) {
			//Nothing interesting
		} else if (frame < end) {
			//Run the game
			this.local_player.input(v);
			for (let i = 0; i < other_inputs.length; i++) this.other_players[i].input(other_inputs[i])
			this.update();
		} else if (frame === end) {
			//Tally the score
			for (let ball of this.balls) {
				if (!ball.collidedWith) continue;

				let score = this.scores.get(ball.collidedWith.id) + 1
				this.scores.set(ball.collidedWith.id, score)
				if (score === this.max_scores[0]) {
					this.max_scores.push()
				} else if (score > this.max_scores[0]) {
					this.max_scores = [score]
				}
			}
		} else if (frame <= restart) {
			//Nothing interesting
		} else {
			//Restart the game
			//TODO: Should actually reset the game instead of starting from scratch and relying on the garbage collector
			Network.reset();
			this.setup();
		}

		Game.frame++;
	}

	public update(): void {
		for (let entity of this.entities) entity.update(this.canvas);

		for (let entity of this.entities) {

			// Ignore players for the moment
			if (entity instanceof Player) continue;

			for (let other_entity of this.entities) {
				if (entity === other_entity) continue;
				if (entity.collides(other_entity)) {
					entity.collision(other_entity)
					entity.collision_interaction(other_entity)
				}
			}
		}
	}

	public draw(): void {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

		for (let entity of this.entities) entity.draw(this.ctx);

		let hw = this.canvas.width / 2;
		let hh = this.canvas.height / 2;

		let frame = Game.frame * Game.FPS;
		let start = Game.GAME_START_COUNTDOWN;
		let end = start + Game.GAME_END_COUNTDOWN;
		let restart = end + Game.GAME_END_SCORE_COUNTDOWN;

		this.ctx.fillStyle = 'black'
		if (frame <= start) {
			let seconds = (start - frame) / 1000.0
			this.ctx.textAlign = 'center'
			this.ctx.font = '32px Ubuntu'
			this.ctx.fillText(`Game will start in ${seconds.toFixed(2)} seconds`, hw, hh)
		} else if (frame <= end) {
			let seconds = (end - frame) / 1000.0
			this.ctx.textAlign = 'left'
			this.ctx.font = '16px Ubuntu'
			this.ctx.fillText(`Game will end in ${seconds.toFixed(2)} seconds`, 20, 30)
		} else {
			this.ctx.textAlign = 'center'
			this.ctx.font = '32px Ubuntu'
			if (this.max_scores.length > 1) {
				this.ctx.fillText('You Tied!', hw, hh)
			} else if (this.scores.get(this.local_player.id) == this.max_scores[0]) {
				this.ctx.fillText('You WON!', hw, hh)
			} else {
				this.ctx.fillText('You Lost :\'(', hw, hh)
			}

			let seconds = (restart - frame) / 1000.0
			this.ctx.fillText(`Game will restart in ${seconds.toFixed(2)} seconds`, hw, hh + 40)

			this.ctx.textAlign = 'left'
			this.ctx.font = '16px Ubuntu'
			for (let i = 0; i < this.scores.size; i++) {
				let y = hh + 70 + 30 * i;
				let key = Array.from(this.scores.keys())[i]
				let score = this.scores.get(key);
				let entity = this.entities.find(e => e.id === key) as Player

				this.ctx.fillStyle = entity.colour;
				this.ctx.beginPath();
				this.ctx.arc(hw - 70, y, 10, 0, 2 * Math.PI);
				this.ctx.stroke();
				this.ctx.fill();

				this.ctx.fillText(`- had a score of ${score}`, hw - 50, y + 5)
			}
		}
	}

	public add_input(): void {
		if (this.input_buffer.length() < Network.BUFFER_SIZE) {
			let input_copy = Object.create(this.current_input)
			input_copy = Object.assign(input_copy, this.current_input)

			this.input_buffer.add(input_copy);
			this.old_input_buffer.add(input_copy);
			this.current_input.frame++;
		}
	}
}
