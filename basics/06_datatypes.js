// data types differentiation reason => who they are getting stored in memoery and how they are getting accessed

// Primitive by value
// 7 types: string, number, boolean, null, undefined, Symbol, BigInt

let a = Symbol('1')
let b = Symbol('1')

// console.log(a == b);
// console.log(a === b);

const bigNumber = 32n // putting n will make it BigInt datatyped number
console.log(typeof bigNumber);

// Reference types Or Non Primitive by address 
// Array, Objects, Functions

const car = ["swift", "Vitara", "Verna"]
// console.log(car);
let details = {
    name : "Aman",
    Age : 32,
    work : true,
}
// console.log(details);

const myfunction = function(){
    console.log("Aman Prajapati");
}

console.log(myfunction);


