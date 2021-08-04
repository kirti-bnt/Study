// A JavaScript class is not an object.
// It is a template for JavaScript objects.


class students{
    constructor(name,age){
        this.name=name;
        this.age=age

    }
    display=()=>{
        console.log('Student name :',this.name)

    }
}

const kirti=new students('kirti',23)
kirti.display()

//promises
let response=200;
let p=new Promise((resolve,reject)=>{
    if (response===200){
        resolve('sucess')
    }
    else{reject('failed')}

}).then((message)=>{
    console.log('Returned from promise : ',message)
}).catch((error)=>console.log('error found :',error))

// == checks just value but === checks value and datatype of operands

