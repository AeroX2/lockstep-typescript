import { Entity, Movable, ElasticCollision, Collidable } from './entity';
import { InputPacket } from '../network/unreliable_packets';
import { Random } from '..';

let randomColor = require('randomcolor');

export class Player extends Entity implements Movable,ElasticCollision,Collidable {
	public static RADIUS = 20;

	public radius = Player.RADIUS;
	public speed = 0.5;
	public colour: string;

	constructor(x: number, y: number) {
		super();
		this.x = x;
		this.y = y;
		this.colour = randomColor({luminosity: 'dark', seed: Random.int32()})
	}

	input(i: InputPacket) {
		if (i.up)    this.vy -= this.speed;
		if (i.down)  this.vy += this.speed;
		if (i.left)  this.vx -= this.speed;
		if (i.right) this.vx += this.speed;
	}

	draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = this.colour;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fill();
	}
}

export class OtherPlayer extends Player {
	constructor(x: number, y: number) {
		super(x,y);
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
