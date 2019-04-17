import * as namespace from './reliable_packets'

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-parameter-properties */
export class ReliablePacket {
	public type: string

	public raw(): any {
		return Object.assign({ type: this.constructor.name }, this)
	}

	public static convert(data: ReliablePacket): any {
		let object = Object.create((namespace as any)[data.type].prototype)
		return Object.assign(object, data)
	}
}

export class StartPacket extends ReliablePacket {
	public constructor(public seed: string) {
		super()
	}
}

export class PlayerPacket extends ReliablePacket {
	public constructor() {
		super()
	}
}

export class OtherClientsPacket extends ReliablePacket {
	public constructor(public others: string[]) {
		super()
	}
}

export class ChecksumPacket extends ReliablePacket {
	public constructor(
		public frame: number,
		public checksum: string) {
		super()
	}
}