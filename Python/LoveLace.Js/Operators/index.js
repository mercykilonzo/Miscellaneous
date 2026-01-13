let x = 5;
let y = '5';

// loosely equal
 let looselyEqual = x== y ? true : false;
 console.log({looselyEqual});

//  strictly Equal

let strictlyEqual = x=== y ? true : false;
console.log({strictlyEqual});

// Unary Operator
console.log(typeof x);

// compound Assigment
let b = 6;
b+=5
console.log({b});

//  Increment and decrement

b++;
console.log({b});
b--;
console.log({b});

// Comparison operators
let c= 5;
let d = 10

let moreThanOrEqualTo = (c>= d) ? true : false
console.log({moreThanOrEqualTo});

// Logical Operators

let logicalAND = x == y && c>=d ? true:false;
console.log({logicalAND});

let logicalOR = x==y || c >=d ? true : false;
console.log({logicalOR});

let userOnline = true;
 let logicalNOT = !userOnline ? true : false;
 console.log({logicalNOT});

//  Implicit coercion  *converts one data type to another *
let num = 5;
num*='5'
 console.log({num});

 let e = +'65'
 console.log({e});

//  Explicit coercion

let item = 5;
console.log(typeof item);
item = String(item)
console.log({item});
item = Array({item})
console.log({item});

let obj = Object(5);
console.log({obj})
console.log(typeof obj);

// copies of string
let copy =' I want to copy a string \n';
console.log(copy.repeat (3));





 
 

 