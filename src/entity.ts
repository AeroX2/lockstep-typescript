export class Entity {
	x: number = 0;
	y: number = 0;
	vx: number = 0;
	vy: number = 0;
	radius: number;

	update(canvas: HTMLCanvasElement): void {}
	draw(ctx: CanvasRenderingContext2D): void {}

	collides(e1: Entity, e2: Entity): boolean { return false; }
	collision(e1: Entity, e2: Entity): void {}
}

export class Movable extends Entity {
	update(canvas: HTMLCanvasElement): void {
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
	collides(e2: Entity) {
		let dx = this.x-e2.x;
		let dy = this.y-e2.y;
		return Math.sqrt(dx*dx+dy*dy) < this.radius+e2.radius
	}
}

export class ElasticCollision extends Entity {
	collision(e2: Entity) {
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
