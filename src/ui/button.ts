import { Game } from "../game/game";

export class Button {
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private text: string;
    private callback: Function;

    private pressed: boolean = false;
    private old_pressed: boolean = false;

    public constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        text: string,
        callback: Function) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.callback = callback;
    }

    public update(_canvas: HTMLCanvasElement): void {
        this.pressed = Game.mouse_x >= this.x-this.width/2 && Game.mouse_x <= this.x+this.width/2 &&
                       Game.mouse_y >= this.y-this.height/2 && Game.mouse_y <= this.y+this.height/2;
        if (this.pressed && !this.old_pressed) this.callback();
        this.old_pressed = this.pressed
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#000"
        if (this.pressed) ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
        else ctx.strokeRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);

        ctx.fillStyle = this.pressed ? "#fff" : "#000";
        ctx.textAlign = 'center';
        ctx.font = '32px Ubuntu';
        ctx.fillText(this.text, this.x, this.y+16);
    }
}