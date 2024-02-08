let canvas = document.querySelector("canvas");

document.body.style.margin = "0";
document.body.style.overflow = "hidden";

function turnBasicCanvas() {
    canvas.setAttribute("width", innerWidth);
    canvas.setAttribute("height", innerHeight);
}

turnBasicCanvas();

addEventListener("resize", turnBasicCanvas)