import { Vector } from "./vector.js";
import { Table } from "./Table.js";
import { GameLoop } from "./gameLoop.js";

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

function display() {
}

function update(correction) {
}

new GameLoop(display, update);