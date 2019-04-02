import { Entity } from './entity'

export class Game {
  entities: Entity[] = []

  loop(): void {
	this.update();
	this.draw();
  }
  
  update(): void {
	for (let entity of this.entities) entity.update();
  }

  draw(): void {
	for (let entity of this.entities) entity.draw();
  }
}
