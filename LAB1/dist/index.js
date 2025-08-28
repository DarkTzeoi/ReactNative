"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
const bai9_1 = require("./bai9");
console.log("---------- Bai 1 ----------");
var person = new bai1_1.Person("Pham Dac Thinh", 21);
console.log(person);
console.log("\n\n---------- Bai 2 ----------\n");
var student = new bai2_1.Student("Pham Dac Thinh", 21, "DHKTPM18CTT");
student.displayInforAll();
console.log("\n\n---------- Bai 3 ----------\n");
var car = new bai3_1.Car("Mercedes", "Mercedes-Benz", 2023);
car.displayCarInfo();
console.log("\n\n---------- Bai 4 ----------\n");
var rectangle = new bai4_1.Rectangle(20, 12);
console.log("Area: " +
    rectangle.calculateArea() +
    "\nPerimeter: " +
    rectangle.calculatePerimeter());
console.log("\n\n---------- Bai 5 ----------\n");
var bankAccount = new bai5_1.BankAccount(1000);
bankAccount.deposit(500);
bankAccount.withdraw(300);
console.log("\n\n---------- Bai 6 ----------\n");
var book = new bai6_1.Book("Pham Dac Thinh", "TypeScriptOOP", 2025);
book.displayBookInfo();
console.log("\n\n---------- Bai 7 ----------\n");
var user = new bai7_1.User("Pham Dac Thinh");
console.log(user.getName);
user.setName = "Thinh";
console.log(user.getName);
console.log("\n\n---------- Bai 8 ----------\n");
var products = [
    new bai8_1.Product("Laptop", 1200),
    new bai8_1.Product("SmartPhone", 800),
    new bai8_1.Product("Mouse", 80),
    new bai8_1.Product("Keyboard", 90),
    new bai8_1.Product("Headphones", 100),
    new bai8_1.Product("USB", 50),
];
const expensiveProducts = products.filter((product) => product.price > 100);
console.log("San pham co gia cao hon 100 la: ");
expensiveProducts.forEach((product) => console.log(`- ${product.name}: ${product.price}`));
console.log("\n\n---------- Bai 9 ----------\n");
const dog = new bai9_1.Dog("Buddy");
const cat = new bai9_1.Cat("Mimi");
dog.sound();
cat.sound();
console.log("\n\n---------- Bai 10 ----------\n");
var acc = new bai10_1.Account("Thinh", 100000, "22691361");
// console.log(acc.balance); => Property 'balance' is private and only accessible within class 'Account'.
// acc.accountNumber = "123123" => Cannot assign to 'accountNumber' because it is a read-only property.
console.log(acc.getBalance);
acc.deposit(4000);
acc.withdraw(10000);
console.log("\n\n---------- Bai 11 ----------\n");
const dog11 = new bai11_1.Dog11("Puppy");
const cat11 = new bai11_1.Cat11("Kitty");
dog11.bark();
cat11.meow();
