import { Vector } from "./vector.js";
import { Table } from "./Table.js";
import { GameLoop } from "./gameLoop.js";
import { Field } from "./Field.js";

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

document.body.style.margin = "0";
document.body.style.overflow = "hidden";

function turnBasicCanvas() {
    canvas.setAttribute("width", innerWidth);
    canvas.setAttribute("height", innerHeight);
}

turnBasicCanvas();

addEventListener("resize", turnBasicCanvas)

let field = new Field(new Vector(100, 100), 4, 4, 3, new Vector(50, 50));
field.position = new Vector(canvas.width / 2 - field.width / 2, canvas.height / 2 - field.height / 2);

function display() {
    field.draw(context);
}

function update(correction) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

new GameLoop(display, update);