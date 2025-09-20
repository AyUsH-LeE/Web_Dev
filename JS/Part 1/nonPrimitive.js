// Object
const username = {
    firstname: "Dinesh",
    isLoggedin: true
};                          // inside values are still mutable
console.log(username);
console.log(username.firstname);
username.firstname = "Mr. D";
console.log(username.firstname);

username.lastname = "Singh";            // more values can be added in const object
console.log(username);

let username2 = {
    "first name": "Dinesh",
    isLoggedin: true
};
console.log(username2["first name"])
console.log(username2.isLoggedin)


// Date
let today = new Date()
console.log(today);
console.log(today.getDate());


// Array
let heros = ["a", "b", "c", true];
console.log(heros[0]);
// Adding new element
heros.push("c");            // prefered
heros[heros.length] = "c";  // not prefered
// Removing last element
heros.pop();                // return the last value and deletes it
// Creating Soft Copy
let softHeros = heros;      // pass by reference
// Creating Hard copies
let hardHeros = [...heros]; // create a new copy
// let hardHeros = heros.slice();  // not prefered
// Merging two arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let mergedArray = arr1.concat(arr2);    // prefered
mergedArray = [...arr1,...arr2];        // not prefered
// Check if a value is present in array or not
heros.includes("c");    




// Implicit type conversion

console.log("1" + 1);       // o/p :- 11
console.log(1 + "1");       // o/p :- 11
let isValue = true
console.log(1 + isValue);   // o/p :- 2

// Explicit type conversions

console.log(Number(isValue));   // o/p :- 1
let isValue2 = "2";
console.log(Number(isValue2));  // o/p :- 2
let isValue3 = "2abc";
console.log(Number(isValue3));  // o/p :- NaN
console.log(typeof Number(isValue3));   // o/p :- number
