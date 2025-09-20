// creating class using ES6(ES6, also known as ECMAScript 2015, is the 6th edition of the ECMAScript standard, which is the specification for JavaScript) 

class Person {
    // encapsulation
    #name               // # represents private member
    #age

    // constructor
    constructor(name,age)
    {
        this.#name = name;
        this.#age = age;
    }

    greet(){
        console.log(`Hi, I'm ${this.#name} and I'm ${this.#age} years old.`);
    }
}

//creating object
const p1 = new Person("Raj", 25);
p1.greet();


// inheritance

class Animal {          // parent class
    constructor(name){
        this.name = name;
    }

    speak()
    {
        console.log(`${this.name} makes a sound.Parent`);
    }
}

class Dogs extends Animal{      // child class
    speak()                                 // polymorphism
    {                                       // overrides the previous speak method
                                            // overloading is not supported in JS. 
                                            // So inorder to access the speak method in Animal we will have to create an object of Animal class
        console.log(`${this.name} barks.Child`);
        console.log(super.speak());         // we can access the speak class of Parent class with the help of super key-word
        
    }
}

//creating object
const dog = new Dogs("Bruno");
dog.speak("Tommy");
dog.speak();


// Static method
class Calculator{
    static add(a, b)
    {
        return a+b;
    }
}

let miniCal = new Calculator();
// console.log(miniCal.add(2, 3));      // this will not work
console.log(Calculator.add(2, 3));      // satic method can only be used via class


// getters and setters
class Employee{
    #salary
    constructor(name, salary)
    {
        if(salary<0)
            throw new Error("Salary cannot be negative");
        this.name = name;
        this.#salary = salary;
    }

    get salary()
    {
        return `You can't see the salary`;
    }

    set salary(value)
    {
        if(value < 0)
        {
            console.error("Invalid Salary");
        }    
        else
        {
            this.#salary = value;
        }

    }
}

let emp = new Employee("Raj", 50000);
console.log(emp.salary);    // get salary gets called
emp.salary = 60000;         // set salary gets called



function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    return `Animal Speaking`;
}

function Dog(name, breed){
    Animal.call(this, name)
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog,prototype.bark = function(){
    return `Woof!`
}

