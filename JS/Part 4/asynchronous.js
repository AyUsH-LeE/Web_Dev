// Synchronous Code
// Executes line by line
console.log("Synchronous");

for(let i=0; i<10; i++)
{
    console.log(i); 
}

// Asynchronous
function sayHello()
{
    console.log("Hello Asynchronous!");    
}

setTimeout(() => {
    // code to be executed
    sayHello();
}, 2000);           // delay in ms

for(let j=0; j<5; j++)
{
    console.log(j);
}
