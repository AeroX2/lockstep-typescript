import * as namespace from './unreliable_packets'

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-parameter-properties */
export class UnreliablePacket {
	public type: string

	public raw(): any {
		return Object.assign({ type: this.constructor.name }, this)
	}

	public static convert(data: UnreliablePacket): any {
		let object = Object.create((namespace as any)[data.type].prototype)
		return Object.assign(object, data)
	}
}

export class InputPacket extends UnreliablePacket {
	public constructor(
		public frame: number,
		public game: number,
		public up: boolean,
		public down: boolean,
		public left: boolean,
		public right: boolean
	) {
		super()
	}
}

export class AckPacket extends UnreliablePacket {
	public constructor(
		public game: number,
		public received_frames: number[]
	) {
		super()
	}
}
