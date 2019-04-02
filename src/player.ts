export class Player implements Entity,Movable,ElasticCollision {
	draw(ctx): void {
		ctx.fillStyle = 'green';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fill();
	}
}
