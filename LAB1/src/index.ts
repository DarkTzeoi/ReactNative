import { Person } from './bai1';
import { Student } from './bai2';
import { Car } from './bai3';
import { Rectangle } from './bai4';
import { BankAccount } from './bai5';
import { Book } from './bai6';
console.log("---------- Bai 1 ----------")
var person = new Person("Pham Dac Thinh", 21);
console.log(person)


console.log("\n\n---------- Bai 2 ----------\n")
var student = new Student("Pham Dac Thinh", 21, "DHKTPM18CTT");
student.displayInforAll();

console.log("\n\n---------- Bai 3 ----------\n")
var car = new Car("Mercedes", "Mercedes-Benz", 2023);
car.displayCarInfo();

console.log("\n\n---------- Bai 4 ----------\n")
var rectangle = new Rectangle(20, 12);
console.log("Area: " + rectangle.calculateArea() + "\nPerimeter: " + rectangle.calculatePerimeter());

console.log("\n\n---------- Bai 5 ----------\n")
var bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.withdraw(300);

console.log("\n\n---------- Bai 6 ----------\n")
var book = new Book("Pham Dac Thinh", "TypeScriptOOP", 2025);
book.displayBookInfo();