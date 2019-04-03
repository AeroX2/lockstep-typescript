import { Network } from "./network";
import { Input } from "./input";

export class Buffer {
	private buffer: Input[] = []
    public filled = false;

	constructor(
		public peer_id: string
    ) { }
    
    add(data: any) {
        this.buffer.push(data)
        if (this.buffer.length > Network.BUFFER_SIZE) this.filled = true;
    }

    public popleft() {
        return this.buffer.shift();
    }

    public popright() {
        return this.buffer.pop();
    }

    public peek() {
        return this.buffer[0];
    }
}