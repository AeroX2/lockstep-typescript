import * as namespace from './unreliable_packets';

export class UnreliablePacket {
    public type: string;

    public raw(): any { return Object.assign({ type: this.constructor.name }, this) }

    public static convert(data: UnreliablePacket): any { 
        let object = Object.create((<any>namespace)[data.type].prototype)
        return Object.assign(object, data)
    }
}

export class InputPacket extends UnreliablePacket {
    constructor(
        public frame: number,
        public up: boolean,
        public down: boolean,
        public left: boolean,
        public right: boolean,
    ) {
        super();
    }
}

export class AckPack extends UnreliablePacket {
    constructor(
        public ack: number,
    ) {
        super();
    }
}