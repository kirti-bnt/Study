// let keyword - declare a variable with block scope.
//  const keyword- allows you to declare a constant 

//this keyword

var open=100
const person={
    'username':'kirti',
    walk(){
        console.log(this);
    }
}

const kids={
    'username':'arya',
    'age':10
   
}
//Returns current context : person object
// person.walk();  

//Returns current context : global window object
// const running=person.walk
// running();

//Returns binded context : kids object
const running=person.walk.bind(kids);
// console.log('run',run)
running();


//arrow function, regular function and this 

const welcome={
    'type':'welcome',
         hello(){
        
        console.log(this)
    }
}
welcome.hello()
//this works in regular function

const goodbye={
    'type':'goodbye',
    bye:()=>console.log(this)
}

goodbye.bye()
//this doesn't work in arrow function


//Map Objects
// using an Object as a key

// creating objects 
const wheat={name:'Wheat',cost:500}
const rice={name:'Rice',cost:700}
const dal={name:'Dal',cost:300}

//creating new map object 
const grocery=new Map();
// Sets a value for a key in a Map object
grocery.set(wheat,10);
grocery.set(rice,9);
grocery.set(dal,8);

console.log('showing grocery: ', grocery)

console.log(grocery.entries())
// Returns an array of the key/value pairs in a Map object

// Set Object
// No duplictaes,can hold multiple data types
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("a");
letters.add("c");
console.log('showing letterrs:',letters)

