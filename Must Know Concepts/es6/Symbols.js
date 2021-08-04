// Making unique keys with primitive types was not possible 
// hence symbol was introduced.
//we don't use new here cause it's not a constructor but a primitive type

let str1='hi'
let str2='hi'
console.log(str1===str2) //true

console.log(undefined===undefined) //true
console.log(null===null) //true
console.log(5===5) //true

// symbol creates uniqueness 
let symb1=Symbol(1)
let symb2=Symbol(2)

//parameter for Symbol(1) is identifier for that symbol which we can use while debugging 

// symb1='kirti'
console.log(symb1===symb2) //false
console.log('showing symb1:',symb1)

console.log('Type of symbol is : ',typeof(Symbol())) //Type of symbol is :  symbol

let obj={}
obj[symb1]='first';
obj[symb2]='second'; //this is value for the property symb2 of object. where symb2 is of type symbol
console.log('my object: ',obj) //my object:  { [Symbol(1)]: 'first', [Symbol(2)]: 'second' }

console.log(obj[symb2])  //second
//we cannot use . operator to access these props from object
console.log(obj.symb2) //undefined


for (key in obj ){
   
    console.log(key)
}
// Symbols are ignored in for in loop


