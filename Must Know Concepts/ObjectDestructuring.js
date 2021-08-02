// JavaScript Object Destructuring is the syntax for extracting values from an object property and assigning them to a variable
// . The destructuring is also possible for JavaScript Arrays.

// Variable name is the same name of the property in the object 

const user = { 
    'usrname': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'pin':411052,
    'department':'IT',
    // 'salary':10000
}

// how to destructure this object prop ?

let {age,usrname} = user
console.log(`Age : ${age} Name: ${usrname}`)  

// output age is :  43


// rule1 : variable declaration rule

let address;
({address}=user)
// Uncaught SyntaxError: Unexpected token '=' if no paranthesis included

let {department,salary} =user


console.log('initial salary : ',salary)
salary=user.salary ? user.salary : 123455;
let details={department,salary}
console.log(details)

//alias for a property name

// let {usrname:uname} = user
// console.log('updated prop name ',uname)



// console.log('updated prop name ',usrname)
//ReferenceError: usrname is not defined



// Nested Object Destructuring

const emp={
     'ename':'kirti',
     'eage':23,
     'ecity':'pune',
     'edepartment':{
            'depname':'Comp-scie',
            'depId': 102,
            'depaddress':{
                'depcity':'BNL',
                'country':'IND'

            }
        }
}

let {ename}=emp
console.log('emp name: ',ename)

let {edepartment}=emp
console.log('emp department: ',edepartment)

let {edepartment:{depId}}=emp
console.log('emp department ID: ',depId)

let  {edepartment:{depaddress:{depcity}}}=emp
console.log('emp department City: ',depcity)

function display(info)
{
    console.log(`Displaying ${info}`)
}

display(depId)

//we can directly pass these props to functions by their variable name directly instead of passing the whole object


//Destructure in Loops

let users=[ 
    {'usrname': 'Alex',
    'address': '05th Park Avenue',
    'age': 40,}
,
    {'usrname': 'Prada',
    'address': '25th Park Avenue',
    'age': 41,}
,

    { 'usrname': 'Joe',
    'address': '16th Park Avenue',
    'age': 42,}
    ]
  


function loop(){
    for(let { usrname, age } of users) {
        console.log(`${usrname} is ${age} years old!`);
    }
}

loop()


//The Console object

const { log, warn, error } = console;


log('hello world ! This is log')
warn('hello world ! This is warn')
error('hello world ! This is error')