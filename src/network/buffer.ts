import { Network } from './network'
import { InputPacket } from './unreliable_packets'

export class Buffer {
	private buffer: InputPacket[] = []
	public filled = false

	public constructor() {}

	public items(): InputPacket[] {
		return this.buffer
	}

	public length(): number {
		return this.buffer.length
	}

	public clear(): void {
		this.buffer = []
		this.filled = false
	}

	public add(data: InputPacket): void {
		//TODO: Replace this with a more efficient SortedSet
		if (!this.buffer.map(v => v.frame).includes(data.frame)) this.buffer.push(data)
		this.buffer = this.buffer.sort((a, b) => a.frame - b.frame)

		if (this.buffer.length > Network.BUFFER_SIZE) this.filled = true
	}

	//TODO: Replace this with a more efficient method
	public find_lowest(game_frame: number): number {
		if (this.buffer.length <= 0) throw 'Buffer is empty, when trying to find lowest'

		for (let i = 0; i < this.buffer.length; i++) {
			if (this.buffer[i].frame != game_frame + i) {
				return game_frame + i
			}
		}
		return this.buffer[this.buffer.length - 1].frame+1
	}

	public remove_old(frame: number): void {
		let index = this.buffer.findIndex(v => v.frame === frame)
		if (index === -1) return; // We haven't generated this frame yet

		// console.log(`Found frame:`, frame)
		// console.log(`Removing ${index} packets`)
		// console.log(this.buffer.map(v => v.frame).join())
		this.buffer.splice(0, index)
	}

	public popleft(): InputPacket {
		return this.buffer.shift()
	}

	public popright(): InputPacket {
		return this.buffer.pop()
	}

	public peek(): InputPacket {
		return this.buffer[0]
	}
}
