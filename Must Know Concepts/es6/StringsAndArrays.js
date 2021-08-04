// Strings

//.includes() 
//returns true if a string contains a specified value, else false

let greet='Welcome to India, my friend!'
console.log(greet.includes('india')) // false
console.log(greet.includes('India')) // true

//.startsWith()
//returns true of string starts with mentioned value
console.log(greet.startsWith('W')) //true
console.log(greet.startsWith('Welcome')) //true
console.log(greet.startsWith('W7lcome')) //false


//.endsWith()
//returns true of string ends with mentioned value
console.group('endsWith()')
console.log(greet.endsWith('!')); //true
console.log(greet.endsWith('friend')); //false
console.log(greet.endsWith('friend!')); //true

// Arrays
// Syntax: Array.from() 

// static method creates a new, shallow-copied Array instance from an array-like or iterable object

let arr=[10,20,30,40,50]

Array.from(arr,(element)=>{console.log('array elements:',element+1)})
console.log('arr: ',arr)

//remove duplicates example

let duplicate=[1,2,4,1,2,2,5,4,6]
let uniqueue=new Set(duplicate) //{ 1, 2, 4, 5, 6 } but this is not an array 
// Array.from(new Set(duplicate)) // so Array.from converts this newly created uniqueue to array 
console.log('duplicate:',duplicate)
console.log('duplicates removed:',uniqueue)


//.keys()
//returns indexes as keys
let fruits=['apple','banana','strawberry'];
let idlist=fruits.keys()
for(let id of idlist){console.log('Fruit key is :',id)}

//.find()

let products=[  
    {
        name:'Roundneck shirt',
        color:'white',
        cost:500
    },
    {
        name:'T shirt',
        color:'Black',
        cost:400
    },
    {
        name:'Scarf',
        color:'Blue',
        cost:205
    }

]

let scarf_cost=products.find(findScarf).cost
// let scarf_cost=products.find(findScarf) //prints whole scarf object
function findScarf(scarf){
    return scarf.name==='Scarf'
}
// function takes 3 arguments:
// The item value
// The item index
// The array itself
  
console.log(scarf_cost)

//fundIndex()
//similar to array.find() but this return you index instead of array element

let arrayList=[70,80,90,100]

const data_90=arrayList.findIndex(find90);
function find90(number){
    return number===90
}

console.log('here is the data for 90: ',data_90) //2 

