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

// creating constructor
function Person(name, age)
{
    this.name = name
    this.age = age
}

// creating constructor
function Car(make, model){
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", "Camry")

function Tea(type){
    this.type = type
    this.describe = function(){
        return `This is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("Lemon Tea")
console.log(lemonTea.describe());

// prototype and constructor function
function Animal(species)
{
    this.species = species
}

Animal.prototype.sound = function (){
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog");
console.log(dog.sound());


//------------------------------------------------------------------------

// Error Handling
function Drink(name)
{
    if(!new.target)
    {
        throw new Error("Drink must be called with new keyword")
    }
    this.name;
}
let tea = new Drink("tea");
let coffe = Drink("Coffe");
