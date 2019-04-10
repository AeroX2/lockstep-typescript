import * as namespace from './reliable_packets';

export class ReliablePacket {
    public type: string;

    public raw(): any { return Object.assign({ type: this.constructor.name }, this) }

    public static convert(data: ReliablePacket): any { 
        let object = Object.create((<any>namespace)[data.type].prototype)
        return Object.assign(object, data)
    }
}

export class StartPacket extends ReliablePacket {
    constructor(
    ) {
        super();
    }
}

export class PlayerPacket extends ReliablePacket {
    constructor(
        public x: number,
        public y: number,
        public colour: string,
    ) {
        super();
    }
}

export class OtherClientsPacket extends ReliablePacket {
    constructor(
        public others: string[]
    ) {
        super();
    }
}