const person = {
    name: "Raj",

    greet(){
        console.log(`Hi, I'm ${this.name}`);
        
    }
}

person.greet();     // context is there

const greetFunction = person.greet;
greetFunction();    // context is lost


const boundGreet = person.greet.bind({name: "Rajesh"});
boundGreet();       // context is now bound and is thus retained

// Also check: call and apply
