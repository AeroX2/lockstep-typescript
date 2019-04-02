import { Entity, Movable, ElasticCollision } from './entity';

export class Player extends Entity implements Movable,ElasticCollision { //,Collidable {
	radius = 20;

	//collides(other_entity: Entity) {

	//}

	draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = 'green';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fill();
	}
}

export class OtherPlayer extends Entity implements Movable,ElasticCollision {
	draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fill();
	}
}
