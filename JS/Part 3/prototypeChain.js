// we can add custom properties to predefined objects
Array.prototype.printArray = function()
{
    return `Custom Method for printing array: ${this}`;
}

let myArray = [1,2,3];
console.log(myArray.printArray());


function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`;
}

const newAnimal = new Animal();
console.log(newAnimal.speak());
