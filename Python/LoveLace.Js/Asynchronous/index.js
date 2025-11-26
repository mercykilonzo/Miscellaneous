const greet = (name)=>{
    console.log('Hello there '+ name);
};
const hello = (name, callback) =>{
    console.log(`My name is ${name}`);
    callback(name);
    
};
hello("Anne", greet);

setTimeout(() => {
    console.log('This is a timeout delay');
},2000);

let count = 0;
const interval = setInterval(() => {
    console.log("This is an interval");
    count++;
    if (count === 3){
        clearInterval(interval);
    }    
},3000);