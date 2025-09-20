// Prototype is like a class

// creating class using ES6(ES6, also known as ECMAScript 2015, is the 6th edition of the ECMAScript standard, which is the specification for JavaScript) 
class vehicle {
    // # represents private member
    #name
    #age
    constructor(name,age)
    {
        this.#name = name;
        this.#age = age;
    }

    greet(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

//creating object
const p1 = new Person("Raj", 25);
p1.greet();



//------------------------------------------------------------------------
let computer = {cpu: 12};
let dell = {
    screen: "HD",
    __proto__: computer     // __(double underscore) is called as Dunder
};

let tomHardware = {};
console.log(`dell`, dell.__proto__);

let genericCar = {tyres: 4}

let tesla = {
    driver: "AI",

}

Object.setPrototypeOf(tesla, genericCar)
console.log(`tesla`, Object.getPrototypeOf(tesla));
