import { Entity, Movable, ElasticCollision, Collidable } from './entity';

export class Ball extends Entity implements Movable,ElasticCollision,Collidable {
	radius = 20;

	constructor(x: number, y: number) {
		super();
		this.x = x;
		this.y = y;
	}

	draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = 'blue';
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
applyMixins(Ball, [Movable,ElasticCollision,Collidable])
