import { Entity, Movable, ElasticCollision } from './entity';

export class Ball extends Entity implements Movable,ElasticCollision {
	radius = 20;

	draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = 'green';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fill();
	}
}
