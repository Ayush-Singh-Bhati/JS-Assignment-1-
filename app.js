// ARRAY OPRATION

let fruits = [];
// add "apple","banana","orange"
fruits.push("apple", "banana", "orange")
// remove first fruit of array
fruits.shift();
// add "grape" to the end of the array
fruits.push("grape")
// Update the second fruit in the array to "pear"
fruits[1] = "pear"

console.log(fruits);





//  Object Operations

let person = {
}
// Add  name: "John", age: 30,  city: "New York"
person.name = "John";
person.age = 30;
person.city = "New York";

// Remove the "age" property
delete person.age;
// Add a new property called "job" with the value "Engineer"
person.job = "Engineer";
// update city property
person.city = "San Francisco"

console.log(person);






// Array of Objects Operations

let cars = []

// Add three car objects
cars.push(
    { make:"Toyota", model:"Camry", year: 2018},
    { make:"Toyota", model:"Camry", year: 2018},
    { make:"Toyota", model:"Camry", year: 2018}
);
// Remove the first car object 
cars.shift();

// Add new car object 
cars.push(
    { make: "Honda", model: "Civic", year: 2020}
);

// Update the "model" property
cars[1].model = "Accord"

console.log(cars)