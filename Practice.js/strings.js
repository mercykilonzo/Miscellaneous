let text = `He's often called "Joy"`;
console.log(text);
console.log(text.length);

const school = "AkiraChix"
const student = "Mercy"
let greeting = `Hello ${student}, welcome to ${school}`
console.log({greeting});
let firstChar = greeting.charAt(0)
console.log({firstChar});
console.log(greeting.at(0));

let x= greeting.slice(0,5)
console.log({x});
let y = greeting.substring(0,5)
console.log({y});

console.log(school.concat(" " + student));

let pets = "i love dogs. Dogs are cute"
let pets2 = pets.replace("dogs", "cats")
console.log({pets2});
let pets3 = pets.replaceAll(/dogs/gi, "cats")
console.log({pets3});

let array = greeting.split(" ")
console.log(array);
let newArray = greeting.split(",")
console.log(newArray);
let string = newArray.toString()
console.log(string);
console.log(typeof(string));


