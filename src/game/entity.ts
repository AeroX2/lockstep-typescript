import { Game } from "./game";

export class Entity {
	public id: number = -1;
	public x: number = 0;
	public y: number = 0;
	public vx: number = 0;
	public vy: number = 0;
	public radius: number;

	public constructor() {
		this.id = Game.entity_id++;
	}

	/* eslint-disable @typescript-eslint/no-unused-vars */
	public update(canvas: HTMLCanvasElement): void {}
	public draw(ctx: CanvasRenderingContext2D): void {}

	public collides(e2: Entity): boolean { return false; }
	public collision(e2: Entity): void {}
	public collision_interaction(e2: Entity): void {}
	/* eslint-enable @typescript-eslint/no-unused-vars */
}

export class Movable extends Entity {
	public update(canvas: HTMLCanvasElement): void {
		this.x += this.vx;
		this.y += this.vy;

		this.vx *= 0.995;
		this.vy *= 0.995;

		if (this.x < this.radius) {
			this.x = this.radius;
			this.vx = -this.vx*0.9;
		}
		if (this.x > canvas.width-this.radius) {
			this.x = canvas.width-this.radius;
			this.vx = -this.vx*0.9;
		}
		if (this.y < this.radius) {
			this.y = this.radius;
			this.vy = -this.vy*0.9;
		}
		if (this.y > canvas.height-this.radius) {
			this.y = canvas.height-this.radius;
			this.vy = -this.vy*0.9;
		}
	}
}

//TODO: This should be eventually replaced with Shapes
export class Collidable extends Entity {
	public collides(e2: Entity): boolean {
		let dx = this.x-e2.x;
		let dy = this.y-e2.y;
		return Math.sqrt(dx*dx+dy*dy) < this.radius+e2.radius
	}
}

export class ElasticCollision extends Entity {
	public collision(e2: Entity): void {
		let dx = e2.x-this.x;
		let dy = e2.y-this.y;
		let distance = Math.sqrt(dx*dx+dy*dy);
		if (distance < this.radius+e2.radius) {
			let normalx = dx/distance;
			let normaly = dy/distance;

			let midx = (this.x+e2.x)/2
			let midy = (this.y+e2.y)/2
			this.x = midx - normalx * this.radius;
			this.y = midy - normaly * this.radius;
			e2.x = midx + normalx * e2.radius;
			e2.y = midy + normaly * e2.radius;

			let vdx = this.vx-e2.vx;
			let vdy = this.vy-e2.vy;

			let dot = vdx*normalx+vdy*normaly
			let dvx = dot*normalx;
			let dvy = dot*normaly;

			this.vx -= dvx;
			this.vy -= dvy;
			e2.vx += dvx;
			e2.vy += dvy;
		}
	}
}
