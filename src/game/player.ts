import { Entity, Movable, ElasticCollision, Collidable } from './entity'
import { InputPacket } from '../network/unreliable_packets'
import { Random } from '../utils'
import randomColor from 'randomcolor'
import Decimal from 'decimal.js';

export class Player extends Entity implements Movable, ElasticCollision, Collidable {
	public static RADIUS = 20

	public radius = Player.RADIUS
	public speed = 0.5
	public colour: string

	public constructor(x: number, y: number) {
		super()
		this.x = new Decimal(x)
		this.y = new Decimal(y)
		Random.int32();
		this.colour = randomColor({ luminosity: 'dark', seed: Random.int32() })
	}

	public input(i: InputPacket): void {
		if (i.up)    this.vy = this.vy.minus(this.speed)
		if (i.down)  this.vy = this.vy.add(this.speed)
		if (i.left)  this.vx = this.vx.minus(this.speed)
		if (i.right) this.vx = this.vx.plus(this.speed)
	}

	public invert_color(hexTripletColor: string): string {
		let color = hexTripletColor;
		color = color.substring(1); // remove #
		let i_color = parseInt(color, 16); // convert to integer
		let invert_color = 0xFFFFFF ^ i_color; // invert three bytes
		color = invert_color.toString(16); // convert to hex
		color = ("000000" + color).slice(-6); // pad with leading zeros
		color = "#" + color; // prepend #
		return color;
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = this.invert_color(this.colour);
		ctx.beginPath()
		ctx.arc(this.x.toNumber(), this.y.toNumber(), this.radius, 0, 2 * Math.PI)
		ctx.fill()

		ctx.fillStyle = this.colour
		ctx.beginPath()
		ctx.arc(this.x.toNumber(), this.y.toNumber(), this.radius-5, 0, 2 * Math.PI)
		ctx.fill()
	}
}

export class OtherPlayer extends Player {
	public constructor(x: number, y: number) {
		super(x, y)
	}
}

// eslint-disable-next-line
function applyMixins(derivedCtor: any, baseCtors: any[]): void {
	baseCtors.forEach(baseCtor => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
			Object.defineProperty(
				derivedCtor.prototype,
				name,
				Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
			)
		})
	})
}
applyMixins(Player, [Movable, ElasticCollision, Collidable])
applyMixins(OtherPlayer, [Movable, ElasticCollision, Collidable])
