import { Entity, Movable, ElasticCollision, Collidable } from './entity'
import { Player, OtherPlayer } from './player'
import Decimal from 'decimal.js';

export class Ball extends Entity implements Movable, ElasticCollision, Collidable {
	public nx: number;
	public ny: number;
	public radius = 20

	//TODO: Keep a history of what balls the player has collided with?
	//collided_with: {[id: string]: Player} = {}
	public collidedWith: Player

	public constructor(x: number, y: number) {
		super()
		this.nx = x;
		this.ny = y;
		this.x = new Decimal(x)
		this.y = new Decimal(y)
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		// let values = Object.values(this.collided_with)

		ctx.fillStyle = this.collidedWith ? this.collidedWith.colour : 'blue'
		ctx.beginPath()
		ctx.arc(this.x.toNumber(), this.y.toNumber(), this.radius, 0, 2 * Math.PI)
		this.collidedWith ? ctx.fill() : ctx.stroke()

		// let division = 2*Math.PI/values.length;
		// for (let i = 0; i < values.length; i++) {
		// 	ctx.fillStyle = values[i].colour
		// 	ctx.beginPath();
		// 	ctx.arc(this.x, this.y, this.radius, i*division, (i+1)*division);
		// 	ctx.fill();
		// }
	}

	public collision_interaction(e2: Entity): void {
		if (e2 instanceof Player || e2 instanceof OtherPlayer) {
			this.collidedWith = e2
		}
	}
}

// eslint-disable-next-line
function applyMixins(derivedCtor: any, baseCtors: any[]): void {
	baseCtors.forEach(baseCtor => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
			Object.defineProperty(
				derivedCtor.prototype,
				name,
				Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
			)
		})
	})
}
applyMixins(Ball, [Movable, ElasticCollision, Collidable])
