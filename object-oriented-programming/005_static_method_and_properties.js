

class User {

    // Defining a static property
    static id = 0;

    // This optional static block will be executed once any oberation is performed on the class
    // To access a static property or a static method from a static methos we use "this"
    static {
        console.log("Class is touched for the 1st time");
        this.id = this.id + 1;
    }

    static getId() {
        
        return this.id;

    }

    constructor(name) {
        // To access a static property or a static method from a non static methos we use class name
        this.custId = User.id;
        this.name = name;
        User.id = User.id + 1;
    }

}

// The static block will be executed (even calling a static function will do the same if that is the first operation)
const user = new User("Sourav Chitrakar");
console.log("The current ID is: " + User.getId());
console.log(user);