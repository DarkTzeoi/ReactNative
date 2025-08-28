export class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  public get getName(): string {
    return this.name;
  }

  public set setName(name: string) {
    this.name = name;
  }
}
