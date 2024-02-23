const items = [
    {
        name: "Bike",
        price: 100
    },
    {
        name: "TV",
        price: 200
    },
    {
        name: "Album",
        price: 10
    },
    {
        name: "Book",
        price: 5
    },
    {
        name: "Phone",
        price: 500
    },
    {
        name: "Computer",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 25
    }
];

// The filter method takes a callback function (let's call it func)
// The func function will have one parameter will will be the Array item for each iteration
// Based on the return value (either true or false) the Array element will be either kept or no kept in the new Array
const filteredItems = items.filter(function(item){
    if(item.price <= 100) {
        return true;
    } else {
        return false
    }
});

console.log(filteredItems);

// The map method takes a callback function (let's call it func)
// The func function will have one parameter will will be the Array item for each iteration
// Based on the return value each item of the new Array will be created
const newItems = items.map(function(item) {

    return ({
        name: item.name
    });

});

console.log(newItems);

// The find method takes a callback function (let's call it func)
// The func function will have one parameter will will be the Array item for each iteration
// It will return the first Array item where the condition it true
const findItem = items.find(function(item){
    if(item.name === "Book") {
        return true;
    } else {
        return false;
    }
});

console.log(findItem);

// The forEach method takes a callback function (let's call it func)
// The func function will have one parameter will will be the Array item for each iteration
// It will run the func callback for each item of the Array
items.forEach(function(item){
    console.log(item);
});