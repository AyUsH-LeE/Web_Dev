// 1. Create a JavaScript object to store details of a student
// Example structure: name, age, rollNo, course.
const obj = {
    name: "Raj",
    age: 23,
    rollNo: 117,
    course: "Science"
};


// 2. Access object properties using dot and bracket notation
// Given an object, access and print specific properties using both notations.
console.log(obj.age);
console.log(obj["age"]);


// 3. Add a new property to an existing object
// Add a marks property to the student object.
obj.marks = 50;
console.log(obj.marks);


// 4. Delete a property from an object
// Delete the age property from the student object.
console.log(obj);
delete obj.age;                                 // delete property
console.log(obj);


// 5. Check if a property exists in an object using in operator
// Check if the object has a property called rollNo.
console.log("rollNo" in obj);


// 6. Loop through all properties of an object using for...in loop
// Print all key-value pairs of an object.
for(item in obj)
    console.log(obj[item]);
console.log();


// 7. Write a function that returns the number of properties in an object
const countProperties = obj => Object.keys(obj).length;
console.log(countProperties(obj));
console.log(obj);
console.log();


// 8. Write a function to return all keys of an object in an array
const returnKeys = obj => Object.keys(obj);
console.log(returnKeys(obj));
console.log();


// 9. Write a function to return all values of an object in an array
const getObjects = obj => Object.values(obj);
console.log(getObjects(obj));
console.log();

// 10. Create a copy of an object using spread operator and Object.assign()
const copyObj = {...obj}
console.log(copyObj);
console.log();


// 11. Create a nested object to represent a book
// Include title, author, and a nested publisher object.
const books = {
    title: "JavaScript",
    author: "Raj",
    publisher: {
        name: "Master Chief John 117 Publishig Co.",
        location: "UNSC",
        year: 2560
    }
};


// 12. Access and modify a deeply nested property
books.publisher.location = "Halo Infinite";
console.log(books);
console.log();


// 13. Merge two objct together
const merged = {...obj, ...books};
// const merged = Object.assign({}, obj, books);


// 14. Use Object.keys(), Object.values() and Object.entries()
// Practice logging each of them and looping through entries.
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
for([key, val] of Object.entries(obj))
    console.log(`${key}: ${val}`);
console.log();


// 15. Freeze an object using Object.freeze() and attempt to modify it
// Object.freeze(obj)
// obj.marks = 12;
console.log(obj);
console.log();


// 16. Write a function to compare two objects and check if they are equal
const equalObj = (obj1, obj2) => {
    if(Object.keys(obj1).length != Object.keys(obj2).length)
        return false;
    for(let key in Object.keys(obj1))
        if(obj1[key] !== obj2[key])
            return false;
    return true;
};
console.log(equalObj(obj, books));
console.log(equalObj(obj, obj));
console.log();


// 17. Convert an object to a JSON string and back using JSON.stringify() and JSON.parse()


// 18. Write a function that counts the number of occurrences of each character in a string using an object
const charCount = (str) => {
    const count = {}
    for(let c of str)
        {
            if(c === ' ' || c === ".")
                continue;
            
            count[c] = (count[c] || 0) + 1;
        }
        return count;

    }
let str = "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit."

console.log(charCount(str));
let charCounts = Object.values(charCount(str));
console.log(`Max char count: ${Math.max(...charCounts)}`);
console.log();


// 19. Create a function that takes an object and inverts its keys and values
const invertObj = obj => {
    const newObj = {}
    for(let [key, value] of Object.entries(obj))
    {
        newObj[String(value)] = key;
    }
    return newObj;
}

// console.log("\n".repeat(process.stdout.rows || 10));
console.log(invertObj(obj));
console.log();


// 20. Destructure object properties into variables (including nested)
const {
    title,
    author,
    publisher:{name, location, year}
} = books;
console.log(title);
console.log(author);
console.log(name);
console.log(location);
console.log(year);
console.log();

// 21. Write a function to deeply clone a nested object
// const deepClone = obj => structuredClone(obj);      // Built-in
const deepClone = obj => {
    if(obj === null || typeof obj !== 'object')     // returns primitive or null values
        return obj;

    if(Array.isArray(obj))                          // checking if obj is an array
        return obj.map(item => deepClone(item));    // creating deep copy of the array

     const cloned = {};
     for(let key in obj)
     {
        if(obj.hasOwnproperty(key))                 // obj.hasOwnProperty(key) ensures it 
                                                    // only clones own properties, not 
                                                    // inherited ones.
            cloned[key] = deepClone(obj[key]);      // clones nested values
     }

     return cloned;
}

// 22. Create a factory function that returns a car object with methods like start(), stop()
function createCar(color)
{
    return {
        color: color,
        start (){
            console.log("Car is running");
        },
        stop (){
            console.log("Car is not running");
            
        }
    };
}

//23. Use object shorthand syntax to create an object from variables
name = "Raj";
age = 11;

const user = {name, age};

//24. Write a function that flattens a nested object (1-level deep)
const flatten = obj => {
    const result = {};
    for(let i in obj)
    {
        if(typeof i == 'object' && !Array.isArray(i))       // if type is object, then flatten that object else insert it
        {
            for(let nestedKey in obj[key])
            {
                result[nestedKey] = obj[key][nestedKey];
            }
        }
        else
        {
            result[key] = obj[key];
        }
    }
    return result;
};

//25. Implement a custom deepEqual(obj1, obj2) function
const deepEqual = (obj1, obj2) => {
    if(obj1 === obj2) return true;

    if(typeof obj !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 ===null)
        return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length) return false;

    for(let key in keys1)
    {
        if(!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
}

