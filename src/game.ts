import { Entity } from './entity'

export class Game {
	frame: number = 0;
	entities: Entity[] = []
	canvas = null
	ctx = null

	setup(): void {
		this.canvas = document.getElementById('canvas')
		this.ctx = canvas.getContext('2d')

		this.entities.push(new Player())
	}

	loop(): void {
		this.frame++;
		this.update();
		this.draw();
	}

	update(): void {
		for (let entity of this.entities) entity.update();
	}

	draw(): void {
		for (let entity of this.entities) entity.draw(this.ctx);
	}
}
