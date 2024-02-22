
// The is a constructor function in JS, defined same as normal function
function BankAccount(name, balance) {

    // Defining the instance variables
    this.customerName = name;
    this.accountNumber = Date.now();
    this.balance = balance;

    // Defining the instance method
    // This is not the proper way to define instance method, each instance will have a seperate method in the memory
    // To overcome the problem we have to define the method in the prototype of the constructor function
    this.deposit = function(amount) {
        // Accessing the instance variable by using "this"
        this.balance = this.balance + amount;
    };

}


// Defining the instance method by linking it to the prototype of the construction function
BankAccount.prototype.withdrawl = function(amount) {

    // Accessing the instance variable by using "this"
    this.balance = this.balance - amount;

};

// Creating the object from the constructor function
const myAccount = new BankAccount("Sourav Chitrakar", 1000);

console.log(myAccount);

myAccount.deposit(5000);

console.log(myAccount);

myAccount.withdrawl(2000);

console.log(myAccount);