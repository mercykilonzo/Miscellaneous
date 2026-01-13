let a = 'Morning';
console.log(a[2]);
a[2] ='f'
console.log({a});
// use indexes to get a character from an item *a.length if you dont know the last index*
console.log(a.slice(2,5));
console.log(a.slice(2, a.length));
console.log(a.slice(2,));

console.log (a.replace(a[2], 'f'))

// String Concatenation

let b = 'Everyone';
console.log(a.concat(' ',b));

console.log(a +' '+ b );
 
let d = `${a} ${b}`
console.log({d});
let text = "I am Mercy"
let newText = text.replace(/ /g, "")
console.log(newText);

console.log(text.split(" "));









