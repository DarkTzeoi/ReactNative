export class BankAccount{
    balance: number;

    constructor(initialBalance: number = 500){
        this.balance = initialBalance;
    }

    deposit(amount: number): void{
        if (amount <= 0){
            console.log("Tien nap vao phai lon hon 0");
            return;
        }
        this.balance += amount;
        console.log(`Da nap: ${amount}, So du moi: ${this.balance}`);
    }

    withdraw(amount: number): void{
        if(this.balance <= amount){
            console.log("So du hien tai cua ban khong du de rut!!!");
            return;
        }
        this.balance -= amount;
        console.log(`So tien rut: ${amount}, So du hien tai: ${this.balance}`)
    }
}