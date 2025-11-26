// Addition
function add(num1,num2){
    return num1 +num2;
}
console.log(add(2,3));

// function subtract (num1, num2){
//     const result = num1 - num2;
//     console.log({result}); 
// };
// console.log(subtract(20,10));

let a = 50;
let b = 20;
function subtract (num1, num2){
    let b = 60;
    console.log({b});
    
    const result = num1 - num2;
    console.log({result});
    console.log({aInside: a});
    return result
  };
  console.log(subtract(20,10));
  console.log({aOutside: a});
  console.log({bOutside: b});
  
  
  const greet = function (name){
    return `Hello ${name}`;
    };
    console.log(greet("Amanda"));

    const personAge = (birthYear) =>{
        const age = new Date().getFullYear() - Number(birthYear);
        return age;

    }
    console.log(personAge(2002));

    // IIFE
    (function(){
        const a = 30;
        console.log(a);
        
    })();
    

    
  function duplicates(z){
    z.sort()
    let dupli = [];
    for (let i = 0; i < z.length;i++){
        if(z[i]===z[i+1] && !dupli.includes(z[i])){
            dupli.push(a[i]);
        }
    }
    return dupli
  };
  const z = ["banana","apple","orange","banana","apple","pineapple"]
console.log(duplicates())



