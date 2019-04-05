import { Network } from "./network";
import { Input } from "./packets";

export class Buffer {
    private buffer: Input[] = []
    public filled = false;

	constructor(
		public peer_id: string
    ) { }

    items(): Input[] {
        return this.buffer;
    }

    length(): number {
        return this.buffer.length;
    }
    
    add(data: any) {
        this.buffer.push(data)
        //TODO: Replace this with a more efficient SortedSet
        this.buffer = this.buffer.sort((a,b) => a.frame - b.frame)

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