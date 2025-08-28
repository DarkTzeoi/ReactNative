"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog11 = exports.Cat11 = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cat11 extends Animal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log(`${this.name} says: "Meow"`);
    }
}
exports.Cat11 = Cat11;
class Dog11 extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(`${this.name} says: "Woof"`);
    }
}
exports.Dog11 = Dog11;
