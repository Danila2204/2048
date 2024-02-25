import { PhysicalObject } from "./Objects.js";

export class Table extends PhysicalObject {
    baseNumber = 2;
    
    constructor(name, characters, number = 2) {
        super(name, characters);

        this.number = number;
        let percent = 240 * (this.number / this.baseNumber / 10);
        
        if (this.number < 128) {
            this.red = 240;
            this.blue = 240 - percent;
            this.green = 240 - percent;
            this.textColor = "#000";
        } else if (this.number < 4096) {
            this.blue = 240;
            this.red = 240 - percent / 100;
            this.green = 240 - percent / 100;
            this.textColor = "#fff";
        } else if (number >= 4096) {
            this.blue = 240 - percent / 1000; 
            this.red = 240 - percent / 1000;
            this.green = 240;
        }

        this.color = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }

    set number(value) {
        if (!(typeof(value) !== "number" || typeof(value) !== "string")) throw new Error("number должен быть типа Number!");

        this.Number = value;
    }

    get number() {
        return this.Number;
    }

    set textColor(value) {
        if (typeof(value) !== "string") throw new Error("textColor долежн быть типа String!");

        this.TextColor = value;
    }

    get textColor() {
        return this.TextColor;
    }

    set color(value) {
        if (typeof(value) !== "string") throw new Error("color долежн быть типа String!");

        this.Color = value;
    }

    get color() {
        return this.Color;
    }

    edit(color, number) {
        this.color = color;
        this.number = number;
    }

    draw(context, fontSize = 24) {
        this.rectConclusion(context, this.color);
        context.fillStyle = this.textColor;
        context.font = `normal ${fontSize}px arial`;
        context.fillText(`${this.number}`, this.position.x + (this.size.x / 2) - context.measureText(this.number).width / 2, this.position.y + this.size.y / 2 + fontSize / 3, 100);
    }
}