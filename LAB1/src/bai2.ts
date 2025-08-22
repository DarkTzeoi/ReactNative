import { Person } from "./bai1";

export class Student extends Person{
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }

    displayInforAll(): void{
        this.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}