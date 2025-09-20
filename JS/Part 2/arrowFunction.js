// single parameter
const square = x => x*x;

// multiple parameter
const add = (a, b) => a+b;

// no parameter
const greet = () => console.log("Hello!");

// multi-line body
const calculate = (a, b) => {
    const sum = a+b;
    return sum;
}

// const squareNumbers = arr => {
//     for(let i=0; i<arr.length; i++)
//     {
//         arr[i] = arr[i]*arr[i];
//     }
//     return arr;
// }
const squareNumbers = arr => arr.map(num => num*num)

const filterEvenNumbers = arr => arr.filter(num => num%2 === 0)

