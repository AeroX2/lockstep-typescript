import { Entity, Movable, ElasticCollision, Collidable } from './entity';
import { Player, OtherPlayer } from './player';
import { createContext } from 'vm';

export class Ball extends Entity implements Movable,ElasticCollision,Collidable {
	radius = 20;

	//TODO: Keep a history of what balls the player has collided with?
	//collided_with: {[id: string]: Player} = {}
	collided_with: Player;

	constructor(x: number, y: number) {
		super();
		this.x = x;
		this.y = y;
	}

	draw(ctx: CanvasRenderingContext2D): void {
		// let values = Object.values(this.collided_with)

		ctx.fillStyle = this.collided_with ? this.collided_with.colour : 'blue'
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		this.collided_with ? ctx.fill() : ctx.stroke();

		// let division = 2*Math.PI/values.length;
		// for (let i = 0; i < values.length; i++) {
		// 	ctx.fillStyle = values[i].colour
		// 	ctx.beginPath();
		// 	ctx.arc(this.x, this.y, this.radius, i*division, (i+1)*division);
		// 	ctx.fill();
		// }
	}

	collision_interaction(e2: Entity) {
		if (e2 instanceof Player || e2 instanceof OtherPlayer) {
			this.collided_with = e2
		}
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
