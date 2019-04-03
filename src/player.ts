import { Entity, Movable, ElasticCollision, Collidable } from './entity';
import { Input } from './input';

export class Player extends Entity implements Movable,ElasticCollision,Collidable {
	radius = 20;
	speed = 0.5;

	input(i: Input) {
		if (i.up)    this.vy += this.speed;
		if (i.down)  this.vy -= this.speed;
		if (i.left)  this.vx -= this.speed;
		if (i.right) this.vx += this.speed;
	}

	draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = 'green';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fill();
	}
}

export class OtherPlayer extends Player {
	draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fill();
	}
}
