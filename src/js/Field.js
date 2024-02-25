import { Table } from "./Table.js";
import { Vector } from "./vector.js";

export class Field {
    constructor(position, rows, columns, borders = 1, size = new Vector(50, 50), backgroundColor = "#aaa", color = "#eee") {
        this.position = position;
        this.rows = rows;
        this.columns = columns;
        this.borders = borders;
        this.size = size;
        this.backgroundColor = backgroundColor;
        this.color = color;
    }

    get width() {
        return this.borders * (this.columns + 1) + this.columns * this.size.x;
    }

    get height() {
        return this.borders * (this.rows + 1) + this.rows * this.size.y;
    }

    set position(value) {
        if (!(value instanceof Vector)) throw new Error("position должен быть типа Vector!");

        this.Position = value;
    }

    get position() {
        return this.Position;
    }
    
    set rows(value) {
        if (typeof(value) !== "number" && value % 1 === 0 && value > 0) throw new Error("rows долежн быть типа Number, положительным натуральным числом!");
        
        this.Rows = value;
    }
    
    get rows() {
        return this.Rows;
    }
    
    set columns(value) {
        if (typeof(value) !== "number" && value % 1 === 0 && value > 0) throw new Error("columns долежн быть типа Number, положительным натуральным числом!");
        
        this.Columns = value;
    }
    
    get columns() {
        return this.Columns;
    }
    
    set backgroundColor(value) {
        if (typeof(value) !== "string") throw new Error("backgroundColor должен быть типа Vector!");

        this.BackgroundColor = value;
    }

    get backgroundColor() {
        return this.BackgroundColor;
    }

    set color(value) {
        if (typeof(value) !== "string") throw new Error("color должен быть типа Vector!");

        this.Color = value;
    }

    get color() {
        return this.Color;
    }

    set borders(value) {
        if (typeof(value) !== "number") throw new Error("borders должен быть типа Number!");

        this.Borders = value;
    }

    get borders() {
        return this.Borders;
    }

    draw(context) {
        context.fillStyle = this.backgroundColor;
        context.fillRect(
            this.position.x,
            this.position.y,
            this.columns * 50 + ((this.columns + 1) * this.borders),
            this.rows * 50 + ((this.rows + 1) * this.borders)
        )

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                let table = new Table("таблица", {
                    position: new Vector(this.position.x + i * this.size.x + this.borders * (i + 1), this.position.y + j * this.size.y + this.borders * (j + 1)),
                    size: this.size
                })

                table.edit(this.color, "");
                table.draw(context);
            }
        }
    }
}