export class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    set x(value) {        
        if (typeof(value) !== "number") throw new Error("x должен быть типа number!")

        this.X = value;
    }

    get x() {
        return this.X;
    }

    set y(value) {        
        if (typeof(value) !== "number") throw new Error("y должен быть типа number!")

        this.Y = value;
    }

    get y() {
        return this.Y;
    }

    get length() {
        if (this.x <= 0 || this.y <= 0) return 0;

        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    summage(vector) {
        if (!(vector instanceof Vector)) throw new Error("vector должен быть типа Vector!");

        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        if (!(vector instanceof Vector)) throw new Error("vector должен быть типа Vector!");

        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    multiplicationToScalar(sclar) {
        if (typeof(sclar) !== "number") throw new Error("sclar должен быть типа number!");

        this.x *= sclar;
        this.y *= sclar;
    }

    multiplicationScalarVector(vector) {
        if (!(vector instanceof Vector)) throw new Error("vector должен быть типа Vector!");

        return this.x * vector.x + this.y * vector.y;
    }

    normalize() {
        if (this.length <= 0) return;

        this.x /= this.length;
        this.y /= this.length;
    }
}