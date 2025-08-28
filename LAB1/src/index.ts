import { Person } from "./bai1";
import { Account } from "./bai10";
import { Cat11, Dog11 } from "./bai11";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";
import { Cat, Dog } from "./bai9";
console.log("---------- Bai 1 ----------");
var person = new Person("Pham Dac Thinh", 21);
console.log(person);

console.log("\n\n---------- Bai 2 ----------\n");
var student = new Student("Pham Dac Thinh", 21, "DHKTPM18CTT");
student.displayInforAll();

console.log("\n\n---------- Bai 3 ----------\n");
var car = new Car("Mercedes", "Mercedes-Benz", 2023);
car.displayCarInfo();

console.log("\n\n---------- Bai 4 ----------\n");
var rectangle = new Rectangle(20, 12);
console.log(
  "Area: " +
    rectangle.calculateArea() +
    "\nPerimeter: " +
    rectangle.calculatePerimeter()
);

console.log("\n\n---------- Bai 5 ----------\n");
var bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.withdraw(300);

console.log("\n\n---------- Bai 6 ----------\n");
var book = new Book("Pham Dac Thinh", "TypeScriptOOP", 2025);
book.displayBookInfo();

console.log("\n\n---------- Bai 7 ----------\n");
var user = new User("Pham Dac Thinh");
console.log(user.getName);

user.setName = "Thinh";
console.log(user.getName);

console.log("\n\n---------- Bai 8 ----------\n");
var products: Product[] = [
  new Product("Laptop", 1200),
  new Product("SmartPhone", 800),
  new Product("Mouse", 80),
  new Product("Keyboard", 90),
  new Product("Headphones", 100),
  new Product("USB", 50),
];

const expensiveProducts = products.filter((product) => product.price > 100);
console.log("San pham co gia cao hon 100 la: ");
expensiveProducts.forEach((product) =>
  console.log(`- ${product.name}: ${product.price}`)
);

console.log("\n\n---------- Bai 9 ----------\n");
const dog = new Dog("Buddy");
const cat = new Cat("Mimi");
dog.sound();
cat.sound();

console.log("\n\n---------- Bai 10 ----------\n");
var acc = new Account("Thinh", 100000, "22691361");
// console.log(acc.balance); => Property 'balance' is private and only accessible within class 'Account'.
// acc.accountNumber = "123123" => Cannot assign to 'accountNumber' because it is a read-only property.

console.log(acc.getBalance);
acc.deposit(4000);
acc.withdraw(10000);

console.log("\n\n---------- Bai 11 ----------\n");
const dog11 = new Dog11("Puppy");
const cat11 = new Cat11("Kitty");
dog11.bark()
cat11.meow()
