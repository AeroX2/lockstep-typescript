import { Entity } from './entity'
import { Player, OtherPlayer } from './player'
import { Ball } from './ball'

export class Game {
	frame: number = 0;
	entities: Entity[] = []
	canvas: HTMLCanvasElement = null
	ctx: CanvasRenderingContext2D = null

	setup(): void {
		this.canvas = document.getElementById('canvas') as HTMLCanvasElement
		this.ctx = this.canvas.getContext('2d')

		this.entities.push(new Player())
	}

	loop(): void {
		this.frame++;
		this.update();
		this.draw();
	}

	update(): void {
		for (let entity of this.entities) entity.update(this.canvas);
	}

	draw(): void {
		for (let entity of this.entities) entity.draw(this.ctx);
	}
}
