// The need of Promise is to execute a pice of code once an async function is executed
// Create an object of a Promise class inside a function and return the same
// While object creation the Promise class will immediately start executing the function that it accepts, lets call it func
// The func function will have two parameters, one is resolve and other one is reject
// Execute the async function (it accepts a function which is executed is asynchronous way, which is called a callback function) inside the func function
// Within the callback function call either resolve with one parameter (to resolve the promise) or reject with one parameter (to reject the promise) based on need
// Implement the promise resolve logic inside "then" of the Promise object and reject logic inside "catch"
// The "then" and "catch" both will accept a function and the function will have one parameter which is the one that we send while executing resolve or reject
// To execute one promise after one we have to chain them using "then, catch" or using "async await"

const actionOneStatus = true;
const actionTwoStatus = true;
const actionThreeStatus = true;

// This function will return a Promise object
function funcActionOne() {

    // Returning the Promise object
    // The Promise class is accepting a function with resolve and reject parameters
    return (new Promise(function(resolve, reject) {

        // The async function is getting executed
        setTimeout(function(){

            if(actionOneStatus) {

                // Based on logic resolved is called (here we are passing an object, we can pass any JS datatype)
                resolve({
                    message: "Action one is completed"
                });

            } else {

                // Based on logic reject is called (here we are passing an object, we can pass any JS datatype)
                reject({
                    message: "Action one is failed"
                });

            }

        }, 3000);

    }));

}

function funcActionTwo() {

    return (new Promise(function(resolve, reject) {

        setTimeout(function(){

            if(actionTwoStatus) {

                resolve({
                    message: "Action two is completed"
                });

            } else {

                reject({
                    message: "Action two is failed"
                });

            }

        }, 2000);

    }));

}

// // Executing the function which will return a Promise
// funcActionOne().then(function(message){
    
//     console.log(message);

//     // Executing the second function which is returning a promise, to chain the promise we have to return it from "then"
//     return funcActionTwo();

// }).then(function(message){
//     console.log(message);
// }).catch(function(message){
//     // There will be multiple "then" but only one "catch" to get reject of any promise
//     console.log(message);
// });


// Defining the async function inside which all the functions which are returning promises are incorporated
async function execute() {


    try {

        // The resolve message will be assigned to messageOne
        const messageOne = await funcActionOne();
        console.log(messageOne);
        const messageTwo = await funcActionTwo();
        console.log(messageTwo);

    } catch(err) {

        // Any reject will come to the catch block
        console.log(err);

    }
}

execute();

console.log("We are here");