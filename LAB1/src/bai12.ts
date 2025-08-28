interface Flyable {
  fly(): void;
}

interface Swimable {
  swim(): void;
}

export class Bird implements Flyable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  fly(): void {
    console.log(`${this.name} can fly`);
  }
}
