import { Entity, Movable, ElasticCollision, Collidable } from './entity';

export class Ball extends Entity implements Movable,ElasticCollision,Collidable {
	radius = 20;

	constructor(x: number, y: number) {
		super();
		this.x = x;
		this.y = y;
	}

	draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = 'green';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fill();
	}
}
