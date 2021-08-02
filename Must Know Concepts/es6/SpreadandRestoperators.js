// Rest parameter: collects all remaining elements into an array.

function add(n,...args) {
    let result = 0;
    console.log('value of n: ',n)
    for (let arg of args) result += arg;
  
    return result
  }
  
//   add(1) // returns 1
  console.log('Addition is ',add(1,2,10,12) )// returns 3

// 1 is stored in n
//   here ...args is rest operator which is storing remaining elements to the Array. 





// Spread Operator

// Spread operator: allows iterables( arrays / objects / strings ) 
// to be expanded into single arguments/elements.

// JS doens't throw an error if parameter and argument count don't match

const arr = [1, 2, 3];
const arr2 = [...arr];
// This is how we can clone or copy the array with deep copy
//deep copy : different instances stored on different addresses so modification in one instance will not affect on another instance 
// but ...arr will deep copy all top level elements and shallow copy all nested elements

let newarr=[10,20,30,[1,2]];
let clone=[...newarr]
console.log('clone', clone);
console.log('newarr', newarr);
// clone.push(555);
// console.log('modified clone', clone);
// console.log('Orginal array newarr', newarr);
// clone.shift(0)
console.log('clone', clone[0]);
console.log('clone', clone[1]);
console.log('clone', clone[2]);
console.log('clone', clone[3]);
console.log('clone 2d 0th position', clone[3][0]);
console.log('clone 2d 1th position', clone[3][1]);

clone[3][0]=333
clone[3][1]=701

console.log('clone 2d 0th position updated', clone[3][0]);
console.log('clone 2d 1th position updated', clone[3][1]);
console.log('clone', clone);
console.log('newarr', newarr);

// so here even we changed the value of clone array still it's affecting to newarr
// this is what shallow copy of nested elements in array 


// Examples : spread operator

// 1. Copying an array

let array1 = ['h', 'e', 'y'];
let array2 = [...array1];
console.log(array2);

// 2. Inserting the elements of one array into another

let baked_desserts = ['cake', 'cookie', 'donut'];
let desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
console.log(desserts);

// 3. Array to arguments

function multiply(number1, number2, number3) {
  console.log(number1 * number2 * number3);
}
let numbers = [1,2,3];
multiply(...numbers);