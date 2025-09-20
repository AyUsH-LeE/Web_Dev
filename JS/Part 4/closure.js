// closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.
// if any function is created, it retains the memory of the function
function outer()
{
    let counter = 4;
    return function(){
        counter++;
        return counter;
    }
}

let increment = outer()
console.log(increment());   //5
console.log(increment());   //6
console.log(increment() );  //7
