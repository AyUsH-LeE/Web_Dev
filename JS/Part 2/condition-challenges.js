// Checking if a number is greater than the other

let n1 = 5;
let n2 = 8;

if(n1>n2)
{
    console.log("Num1 is greater than Num2");
    
}
else
{
    console.log("Num2 is greater than Num1");
    
}

let username = "hello";
let anotherUser = "hello";
if(username == anotherUser)
{
    console.log("Pick another username");
}


// Check if a variable is number or not
let score = 44;
if(typeof score === 'number')           // use === (good practice)
{
    console.log("This is a number");
    
}
else
{
    console.log("It is not a number");
}

let isReady = true;
if (isReady)
{
    console.log("Tea is ready");
}


// check if an array is empty or not
let items = [];
if(items.length === 0)
{
    console.log("Array is Empty");
}
else
{
    console.log("Array is not Empty");
    
}

(items.length===0)?console.log("Array Empty"):console.log("Array not Empty");
