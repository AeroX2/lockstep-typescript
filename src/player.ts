import { Entity, Movable, ElasticCollision, Collidable } from './entity';
import { InputPacket } from './unreliable_packets';

export class Player extends Entity implements Movable,ElasticCollision,Collidable {
	radius = 20;
	speed = 0.5;

	constructor(x: number, y: number) {
		super();
		this.x = x;
		this.y = y;
	}

	input(i: InputPacket) {
		if (i.up)    this.vy -= this.speed;
		if (i.down)  this.vy += this.speed;
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

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
applyMixins(Player, [Movable,ElasticCollision,Collidable])
applyMixins(OtherPlayer, [Movable,ElasticCollision,Collidable])
