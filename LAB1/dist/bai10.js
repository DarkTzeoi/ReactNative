"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(user, balance, accountNumber) {
        this.user = user;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    get getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Tien nap vao phai lon hon 0");
            return;
        }
        this.balance += amount;
        console.log(`Da nap: ${amount}, So du moi: ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance <= amount) {
            console.log("So du hien tai cua ban khong du de rut!!!");
            return;
        }
        this.balance -= amount;
        console.log(`So tien rut: ${amount}, So du hien tai: ${this.balance}`);
    }
}
exports.Account = Account;
