

class BankAccount {

    constructor(customerName, balance) {
        
        // Defining the instance variables inside the constructor method
        // Using "this" will provide access to the instance variables as well as methods
        this.customerName = customerName;
        this.accountID = Date.now();
        this.balance = balance;

    }

    // Defining the methods, this is same as assigning the method to the prototype
    deposit(amount) {

        this.balance = this.balance + amount;

    }

    withdrawl(amount) {

        this.balance = this.balance + amount;

    }

}

const myAccount = new BankAccount("Sourav Chitrakar", 1000);

console.log(myAccount);

myAccount.deposit(5000);

console.log(myAccount);

myAccount.withdrawl(2000);

console.log(myAccount);