import { Vector } from "./vector.js";

const G = 9.8;

export class GameObject {
    constructor(name) {
        this.name = name;
    }

    set name(value) {
        if (typeof(value) !== "string") throw new Error("name должен быть типа String!");

        this.Name = value;
    }

    get name() {
        return this.Name;
    }
}

export class PhysicalObject extends GameObject {
    baseCharactersName = [
        "position",
        "speed",
        "weight",
        "attraction",
        "size"
    ];

    constructor(name, characters) {
        super(name);

        
        for (let character in characters) {
            for (let i = 0; i < this.baseCharactersName.length; i++) {
                if (character.toString() === this.baseCharactersName[i]) {
                    this[this.baseCharactersName[i]] = characters[character];
                }
            }
        }
        
        this.gravity = G * this.weight;
        this.leftExtremePoint = new Vector(this.position.x - this.size.x / 2, this.position.y - this.size.y / 2);
        this.rightExtremePoint = new Vector(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2);

        if (this.speed && this.gravity) this.speed.y += this.gravity;
    }
    
    set speed(value) {
        if (!(value instanceof Vector)) throw new Error("speed должен быть типа Vector!");
        
        this.Speed = value;
    }

    get speed() {
        return this.Speed;
    }

    set position(value) {
        if (!(value instanceof Vector)) throw new Error("position должен быть типа Vector!");

        this.Position = value;
    }

    get position() {
        return this.Position;
    }
    
    set weight(value) {
        if (typeof(value) !== "number") throw new Error("weight доолежн быть типа number!");
        
        this.Weight = value;
    }
    
    get weight() {
        return this.Weight;
    }
    
    set attraction(value) {
        if (typeof(value) !== "boolean") throw new Error("attraction доолежн быть типа boolean!");
        
        this.Attraction = value;
    }
    
    get attraction() {
        return this.Attraction;
    }
    
    set gravity(value) {
        if (typeof(value) !== "number") throw new Error("gravity доолежн быть типа number!");
        
        this.Gravity = value;
    }

    get gravity() {
        return this.Gravity;
    }
    
    set size(value) {
        if (!(value instanceof Vector)) throw new Error("size должен быть типа Vector!");

        this.Size = value;
    }

    get size() {
        return this.Size;
    }

    collision(object) {
        if (
            ((this.rightExtremePoint.x >= object.leftExtremePoint.x) && (this.leftExtremePoint.y <= object.rightExtremePoint.y))
            &&
            ((this.rightExtremePoint.y >= object.leftExtremePoint.y) && (this.leftExtremePoint.y <= object.rightExtremePoint.y))
            ) return true;
        return false;
    }

    rectConclusion(context, color = "#f00") {
        context.fillStyle = color;
        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }

    move(vector) {
        if (!(vector instanceof Vector)) throw new Error("vector должен быть типа Vector!")

        this.position = this.position.summage(vector);
    }
}