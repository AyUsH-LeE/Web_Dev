function greet()
{
    console.log("Hello!");
    
}

greet();

function greet2(name)
{
    console.log(`Hello ${name}`);
}
greet2("Raj");

function greet3(name)
{
    return `Hello ${name}`
}
console.log(greet3("Ram"));
