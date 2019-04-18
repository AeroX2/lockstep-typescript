import { Game } from './game'
import { Decimal } from 'decimal.js'

export class Entity {
	public id: number = -1
	public x: Decimal = new Decimal(0)
	public y: Decimal = new Decimal(0)
	public vx: Decimal = new Decimal(0)
	public vy: Decimal = new Decimal(0)
	public radius: number

	public constructor() {
		this.id = Game.entity_id++
	}

	/* eslint-disable @typescript-eslint/no-unused-vars */
	public update(canvas: HTMLCanvasElement): void {}
	public draw(ctx: CanvasRenderingContext2D): void {}

	public collides(e2: Entity): boolean {
		return false
	}
	public collision(e2: Entity): void {}
	public collision_interaction(e2: Entity): void {}
	/* eslint-enable @typescript-eslint/no-unused-vars */
}

export class Movable extends Entity {
	public update(canvas: HTMLCanvasElement): void {
		this.x = this.x.add(this.vx);
		this.y = this.y.add(this.vy);

		this.vx = this.vx.mul("0.995")
		this.vy = this.vy.mul("0.995")

		if (this.x.lessThan(this.radius)) {
			this.x = new Decimal(this.radius)
			this.vx = this.vx.neg().mul("0.9")
		}
		if (this.x.greaterThan(canvas.width - this.radius)) {
			this.x = new Decimal(canvas.width - this.radius)
			this.vx = this.vx.neg().mul("0.9")
		}
		if (this.y.lessThan(this.radius)) {
			this.y = new Decimal(this.radius)
			this.vy = this.vy.neg().mul("0.9")
		}
		if (this.y.greaterThan(canvas.height - this.radius)) {
			this.y = new Decimal(canvas.height - this.radius)
			this.vy = this.vy.neg().mul("0.9")
		}
	}
}

//TODO: This should be eventually replaced with Shapes
export class Collidable extends Entity {
	public collides(e2: Entity): boolean {
		let dx = this.x.minus(e2.x)
		let dy = this.y.minus(e2.y)
		return dx.mul(dx).add(dy.mul(dy)).sqrt().lessThan(this.radius + e2.radius)
	}
}

export class ElasticCollision extends Entity {
	public collision(e2: Entity): void {
		let dx = e2.x.minus(this.x)
		let dy = e2.y.minus(this.y)
		let distance = dx.mul(dx).add(dy.mul(dy)).sqrt()
		if (distance.lessThan(this.radius + e2.radius)) {
			let normalx = dx.div(distance)
			let normaly = dy.div(distance)

			let midx = this.x.add(e2.x).div(2)
			let midy = this.y.add(e2.y).div(2)
			this.x = midx.minus(normalx.mul(this.radius))
			this.y = midy.minus(normaly.mul(this.radius))
			e2.x = midx.add(normalx.mul(e2.radius))
			e2.y = midy.add(normaly.mul(e2.radius))

			let vdx = this.vx.minus(e2.vx)
			let vdy = this.vy.minus(e2.vy)

			let dot = vdx.mul(normalx).add(vdy.mul(normaly))
			let dvx = dot.mul(normalx)
			let dvy = dot.mul(normaly)

			this.vx = this.vx.minus(dvx)
			this.vy = this.vy.minus(dvy)
			e2.vx = e2.vx.add(dvx)
			e2.vy = e2.vy.add(dvy)
		}
	}
}
