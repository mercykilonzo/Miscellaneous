// replace "javascript" with js 
let text = "i love javascript. Javascript is a fun languange"
let text2 = text.replace(/javascript/gi, "js")
console.log({text2});

// reverse a string 

let text3 = text.split("").reverse().join(" ")
console.log({text3});
// extracts 1st 5 characters
let word = "mwikali"
let word1 = word.slice(0,6)
console.log({word1});

// finds the position of the first occurrance of "code" in a given string
let txt = "i love to code, code is a wonderful thing"
let txt1 = txt.indexOf("code")
console.log({txt1});

// counts how many times "a" appears in a string
// let fruit= "banana"
const countA = (str) =>{
    let count = 0
    str.split('').forEach(char => {
        if(char ==="a")count++;
    });
    return count;

}
console.log(countA("banana"));

const items = (wrd) =>{
    let count = 0
    for (let i =0; i< wrd.length; i++){
        if(wrd[i]==="a"){
            count++;
        }
    }
    return count;
};
console.log(countA("banana"))

// to titlecase

const toTitleCase = (str2) =>{
    return str2
    // .tolowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};
console.log(toTitleCase("who moved my cheese"));

let title = "who moved my cheese"
let newtitle = title.split(" ")
let booktitle = newtitle.charAt(0).toUpperCase() + newtitle.slice(1)
console.log({booktitle});








