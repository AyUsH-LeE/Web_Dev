//while loop
let sum = 0;
let i = 1;
while(i<=5)
{
    sum+=i;
    i++;
}
console.log(sum);


// do while loop
// run on browser console
// let teaCollection = [];
// let tea;
// do {
//     tea = prompt('Enter your favourite Tea (type "stop" to exit)');

//     if(tea!== "stop")
//         teaCollection.push(tea)
// } while (tea!=="stop");


// for loop
let multipleNumbers = [];
let numbers = [2,4,6];
let taken
for (let i = 0; i < numbers.length; i++)
{
    // taken = numbers[i] * 2;
    // multipleNumbers.push(taken);    
    multipleNumbers.push(numbers[i] * 2);    
}
console.log(multipleNumbers);


