

class BankAccount {

    // By using # we are defining a private instance variable
    // Same way we can define instance methods as well
    // They can not be used inside the class (not even in child class in case of inheritance)
    #balance = 0;

    constructor(customerName, balance) {
        
        // Defining the instance variables inside the constructor method
        this.customerName = customerName;
        this.accountID = Date.now();
        this.#balance = balance;

    }

    // Defining the methods, this is same as assigning the method to the prototype
    deposit(amount) {

        this.#balance = this.#balance + amount;

    }

    withdrawl(amount) {

        this.#balance = this.#balance + amount;

    }

    // Defining a setter for the private variable balance
    // the name of the setter does not matter
    // The setter be accessed as normal instance property
    set setBalance(amount) {
        this.#balance = amount;
    }

    // Defining a getter for the private variable balance
    // the name of the getter does not matter
    // The getter be accessed as normal instance property
    get getBalance() {
        return this.#balance;
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

myAccount.setBalance = 0;

console.log(myAccount.getBalance);

console.log(myAccount);