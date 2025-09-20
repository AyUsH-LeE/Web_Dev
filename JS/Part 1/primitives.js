// Number
let balance = 120;                  // Number
let otherBalance = new Number(120); // Object

console.log(balance);
console.log(otherBalance.valueOf());
console.log(typeof balance);
console.log(typeof otherBalance);


//boolean
let isActive = true;                // Boolean
let active = new Boolean(true);     // object


// null and undefined
let firstName;                      // undefined
console.log(firstName);
let lastName = undefined;           // undefined
let first = null;                   // null
console.log(first);


// String
let myString = "Hello";
let myString1 = 'Hola';
let username = 'Dinesh';

let oldGreet = myString + "Dinesh";
console.log(oldGreet);

let greetMessage = `Hello ${username}!`;
console.log(greetMessage);
let value = `2*2 = ${2*2}`          //  computation
console.log(value);

// symbol
let sm1 = Symbol('Dinesh');         // each symbol is unique
let sm2 = Symbol('Dinesh');
console.log(sm1 == sm2);            // false