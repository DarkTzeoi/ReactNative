class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

export class Cat11 extends Animal {
  constructor(name: string) {
    super(name);
  }

  meow(): void {
    console.log(`${this.name} says: "Meow"`);
  }
}

export class Dog11 extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark(): void {
    console.log(`${this.name} says: "Woof"`);
  }
}
