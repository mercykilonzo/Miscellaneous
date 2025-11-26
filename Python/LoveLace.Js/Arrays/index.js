const students = ['Jane', 'Amanda', 'Hellen'];
console.log({students});

// Reasign value
students[1] = 'Tom';
console.log({students});

// Adding items
students.push('Susan');
console.log({students});

students.unshift('Anne');
console.log({students});

// Remove items
students.pop();
console.log({students});

students.shift();
console.log({students});

// loops

let nums = [10,20,30,40];

const double = nums.map(item => item * 2);
console.log({double});

// sum of all elements

let count = 0;
nums.forEach(item => count += item);
console.log({count});

const total = nums.reduce((acc, item) => acc + item, 0)
console.log({total});

// For Loop

let multiples = [];
for(let i = 0; i <nums.length; i++){
    multiples.push(nums[i] * nums[i])
}
console.log({multiples});

const items = [5, 2, 8, 9, 1, 12, 15];

const even = items.filter(item => item %2 === 0);
console.log({even});

const discover = items.find(item => item ===1);
console.log({discover});

// Destrusting 
const [a, b,...c] = nums;
console.log({a});
console.log({b});
console.log({c});

function addition(arr){
    let sum = 0
    for(let i = 0; i <arr.length; i++){
        sum+=arr[i]
    }
    return sum

}

console.log(addition([1,2,3,4,5,6,7,8,9]));



function arrMutiples(arr){
let multiples = [];
for(i=0; i<arr.length; i++){
    multiples.push(arr[i] * arr[i])
}
return multiples

}
console.log(arrMutiples([2,4,6,8,10]));
