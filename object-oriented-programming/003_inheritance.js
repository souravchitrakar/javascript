

class BankAccount {

    constructor(customerName, balance) {
        
        // Defining the instance variables inside the constructor method
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

class SavingsAccount  extends BankAccount {

    constructor(customerName, balance) {

        // Calling the constructor of the parent method
        super(customerName, balance);

        // This instance variable is of SavingsAccount
        this.transactionAmount = 5000;

    }

    // This method is of SavingsAccount
    knowTransactionamount() {

        console.log("The transaction amount is: " + this.transactionAmount);

    }

}

const myAccount = new SavingsAccount("Sourav Chitrakar", 1000);

console.log(myAccount);

myAccount.knowTransactionamount();