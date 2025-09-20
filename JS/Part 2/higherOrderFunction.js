function greetFunction(name)
{
    return "Hello "+name;
}

function processUserInput(callback){        // greetFunction is now callback
                  return callback("Raj")    // greetFunction is called
}

const greeting = processUserInput(greetFunction);
console.log(greeting);



/// Returning a fnction
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);   // returns function
                                // doule is now a function
console.log(double);            // [Function (anonymous)]
console.log(double(5)); // 10


function sumOfN(n) {
    let sum = 0;
    for(let i=1; i<= n; i++)
        sum+=i;
    return sum;
}

function printMultiplicationTable(n) {
    let multi = [];
    for(let i=1; i<=10; i++)
        multi.push(`${n} * ${i} = ${n*i}`);
  return multi;
}

function countVowels(str) {
    let vovels = 'aeiouAEIOU';
    let count = 0;
    
    for(let char of str)
    {
        if(vovels.includes(char))
            count++;
    }
  return count;
}
