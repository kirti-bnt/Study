// Short Syntax
// No need of function keyword 
// return keyword, and the curly brackets are optional only for single line statement in the function

const greet =(message)=>console.log(message)

greet('Hello world !')

// Arrow function doesn't have their own this keyword hence not suitable for defining object methods.

//Arrow function are not hoisted, They must be defined before the use

//Arguments binding with refular function vs arrow function

let regFun = {  
    showArgs(){ 
     console.log(arguments); 
    } 
   }; 
   regFun.showArgs(10,20,30);

let arrowFun = {  
    showArgs : (...n) => { 
    console.log(n); 
   } 
  }; 
  arrowFun.showArgs(1, 2, 3, 4);

  //here rest operator is used 

