import { Entity } from './entity'
import { Player, OtherPlayer } from './player'
import { Ball } from './ball'
import { InputPacket } from '../network/unreliable_packets'
import { Buffer } from '../network/buffer'
import { Network } from '../network/network'
import { Random } from '../utils';
import { Decimal } from 'decimal.js';

export class Game {
	public static FPS = Math.floor(1000 / 60)
	public static GAME_START_COUNTDOWN = 3000
	public static GAME_END_COUNTDOWN = 10000
	public static GAME_END_SCORE_COUNTDOWN = 2000

	//TODO: Make this not a static variable?
	public static game: number = 0;
	public static frame: number;
	public static entity_id: number

	public entities: Entity[]
	protected canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
	private ctx: CanvasRenderingContext2D = this.canvas ? this.canvas.getContext('2d') : null

	protected current_input: InputPacket = new InputPacket(0, Game.game, false, false, false, false)
	protected input_buffer: Buffer
	public old_input_buffer: Buffer

	private local_player: Player
	private other_players: OtherPlayer[]
	private balls: Ball[]

	private score_tallied: boolean;
	private scores: Map<number, number>
	private max_scores: number[]

	public setup(): void {
		Game.game += 1;
		Game.frame = 0
		Game.entity_id = 0

		this.current_input.frame = 0;
		this.current_input.game += 1; 

		this.input_buffer = new Buffer()
		this.old_input_buffer = new Buffer()

		this.other_players = []
		let sorted_mapping = Array.from(Network.mapping.keys())
			.concat(Network.local_id)
			.sort()

		let random_range = (min: number, max: number): number => {
			return new Decimal(Random()).mul((max - min)).add(min).floor().toNumber();
		}
		for (let client of sorted_mapping) {
			console.log('Making player for', client)
			let x = random_range(Player.RADIUS, this.canvas.width - Player.RADIUS)
			let y = random_range(this.canvas.height / 2, this.canvas.height - Player.RADIUS)

			if (client === Network.local_id) this.local_player = new Player(x, y)
			else this.other_players[Network.mapping.get(client)] = new OtherPlayer(x, y)
		}

		this.entities = []
		this.entities.push(this.local_player)
		this.entities = this.entities.concat(this.other_players)

		this.score_tallied = false;
		this.scores = new Map()
		for (let entity of this.entities) this.scores.set(entity.id, 0)
		this.max_scores = [-1]

		let sp = 2
		let br = 20
		let balls = [new Ball(400, 250)]

		balls.push(new Ball(balls[0].nx - br - sp, balls[0].ny - br * 2))
		balls.push(new Ball(balls[0].nx + br + sp, balls[0].ny - br * 2))

		balls.push(new Ball(balls[0].nx - br * 2 - sp, balls[0].ny - br * 4))
		balls.push(new Ball(balls[0].nx,               balls[0].ny - br * 4))
		balls.push(new Ball(balls[0].nx + br * 2 + sp, balls[0].ny - br * 4))

		balls.push(new Ball(balls[0].nx - br - sp,         balls[0].ny - br * 6))
		balls.push(new Ball(balls[0].nx - br * 3 - sp * 2, balls[0].ny - br * 6))
		balls.push(new Ball(balls[0].nx + br + sp,         balls[0].ny - br * 6))
		balls.push(new Ball(balls[0].nx + br * 3 + sp * 2, balls[0].ny - br * 6))

		this.balls = balls
		this.entities = this.entities.concat(balls)

		window.onkeydown = e => {
			if (e.key === 'ArrowUp') this.current_input.up = true
			if (e.key === 'ArrowDown') this.current_input.down = true
			if (e.key === 'ArrowLeft') this.current_input.left = true
			if (e.key === 'ArrowRight') this.current_input.right = true
		}

		window.onkeyup = e => {
			if (e.key === 'ArrowUp') this.current_input.up = false
			if (e.key === 'ArrowDown') this.current_input.down = false
			if (e.key === 'ArrowLeft') this.current_input.left = false
			if (e.key === 'ArrowRight') this.current_input.right = false
		}
	}

	public simulate(other_inputs: InputPacket[]): void {
		// console.log("Simulating frame: ", Game.frame)

		let v = this.input_buffer.popleft()

		let frame = Game.frame * Game.FPS
		let start = Game.GAME_START_COUNTDOWN
		let end = start + Game.GAME_END_COUNTDOWN
		let restart = end + Game.GAME_END_SCORE_COUNTDOWN

		if (frame <= start) {
			//Nothing interesting
		} else if (frame < end) {
			//Run the game
			this.local_player.input(v)
			for (let i = 0; i < other_inputs.length; i++) this.other_players[i].input(other_inputs[i])
			this.update()
		} else if (frame <= restart) {
			//Tally the score
			if (!this.score_tallied) {
				this.score_tallied = true;
				for (let ball of this.balls) {
					if (!ball.collidedWith) continue

					let score = this.scores.get(ball.collidedWith.id) + 1
					this.scores.set(ball.collidedWith.id, score)
					if (score === this.max_scores[0]) {
						this.max_scores.push()
					} else if (score > this.max_scores[0]) {
						this.max_scores = [score]
					}
				}
			}
		} else {
			//Restart the game
			Network.ignore_packets = true;
			Network.reset()
			this.setup()
			Network.ignore_packets = false;
		}

		Game.frame++
	}

	public update(): void {
		for (let i = 0; i < this.entities.length; i++) {
			let entity = this.entities[i]
			entity.update(this.canvas)
		} 

		for (let i = 0; i < this.entities.length; i++) {
			let entity = this.entities[i]
			// Ignore players for the moment
			if (entity instanceof Player) continue

			for (let ii = 0; ii < this.entities.length; ii++) {
				let other_entity = this.entities[ii];
				if (entity === other_entity) continue
				if (entity.collides(other_entity)) {
					entity.collision(other_entity)
					entity.collision_interaction(other_entity)
				}
			}
		}
	}

	public draw(): void {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

		for (let entity of this.entities) entity.draw(this.ctx)

		let hw = this.canvas.width / 2
		let hh = this.canvas.height / 2

		let frame = Game.frame * Game.FPS
		let start = Game.GAME_START_COUNTDOWN
		let end = start + Game.GAME_END_COUNTDOWN
		let restart = end + Game.GAME_END_SCORE_COUNTDOWN

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
				this.ctx.fillText("You Lost :'(", hw, hh)
			}

			let seconds = (restart - frame) / 1000.0
			this.ctx.fillText(`Game will restart in ${seconds.toFixed(2)} seconds`, hw, hh + 40)

			this.ctx.textAlign = 'left'
			this.ctx.font = '16px Ubuntu'
			for (let i = 0; i < this.scores.size; i++) {
				let y = hh + 70 + 30 * i
				let key = Array.from(this.scores.keys())[i]
				let score = this.scores.get(key)
				let entity = this.entities.find(e => e.id === key) as Player

				this.ctx.fillStyle = entity.colour
				this.ctx.beginPath()
				this.ctx.arc(hw - 70, y, 10, 0, 2 * Math.PI)
				this.ctx.stroke()
				this.ctx.fill()

				this.ctx.fillText(`- had a score of ${score}`, hw - 50, y + 5)
			}
		}
	}

	public add_input(): void {
		if (this.input_buffer.length() < Network.BUFFER_SIZE) {
			// console.log('Adding frame:', this.current_input.raw())
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
