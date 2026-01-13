const outer = () =>{
    let a = 20;
    function inner (){
        let c = 50;
        return a +c;
    }
    return inner;
};
// console.log(outer());

const outerFunction = outer();
console.log(outerFunction());

