"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(initialBalance = 500) {
        this.balance = initialBalance;
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
exports.BankAccount = BankAccount;
