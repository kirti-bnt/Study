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