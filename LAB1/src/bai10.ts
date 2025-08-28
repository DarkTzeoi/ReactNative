export class Account{
    public user: string;
    private balance: number;
    public readonly accountNumber: string;

    constructor(user: string, balance: number, accountNumber: string) {
        this.user = user;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    
    public get getBalance() : number {
        return this.balance;
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