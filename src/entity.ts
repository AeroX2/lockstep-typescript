export class Movable extends Entity {
	update(canvas): void {
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

export class ElasticCollision extends Entity {
	collision(e1: Entity, e2: Entity) {
		let dx = e2.x-e1.x;
		let dy = e2.y-e1.y;
		let distance = Math.sqrt(dx*dx+dy*dy);
		if (distance < e1.radius+e2.radius) {
			let normalx = dx/distance;
			let normaly = dy/distance;

			let midx = (e1.x+e2.x)/2
			let midy = (e1.y+e2.y)/2
			e1.x = midx - normalx * e1.radius;
			e1.y = midy - normaly * e1.radius;
			e2.x = midx + normalx * e2.radius;
			e2.y = midy + normaly * e2.radius;

			let vdx = e1.vx-e2.vx;
			let vdy = e1.vy-e2.vy;

			let dot = vdx*normalx+vdy*normaly
			let dvx = dot*normalx;
			let dvy = dot*normaly;

			e1.vx -= dvx;
			e1.vy -= dvy;
			e2.vx += dvx;
			e2.vy += dvy;
		}
	}
}

export interface Entity {
	update(canvas: Canvas): void
	draw(ctx: Context2D): void
	collision(e1: Entity, e2: Entity): void
}
