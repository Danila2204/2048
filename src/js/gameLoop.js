export class GameLoop {
    constructor(_display, _update) {
        this.display = _display;
        this.update = _update;

        this.deltaTime = 0;
        this.lastUpdate = 0;
        this.maxInterval = 40;

        this.animate = this.animate.bind(this);
        this.animate();
    }

    animate(currentTime = 0) {
        requestAnimationFrame(this.animate);

        this.deltaTime = currentTime - this.lastUpdate;

        this.update(this.deltaTime / 1000);
        this.display();

        this.lastUpdate = currentTime;
    }
}