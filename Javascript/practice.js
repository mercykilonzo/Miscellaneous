


function getVowels(input){
    let count = 0
    // let vowels = ["a","e","i","o","u"]
    input.split('').forEach(element => {
        if(element !== "a"|| "e" || "i" || "o"|| "u"){
            count++;  
        }
                  
    });
    return count
   

};
let input = "banana";
console.log(getVowels(input));

// Reverse a string Input:let email = "inbox";
function reverseString (str){
    let a = str.split("")
    let l = 0
    let r = a.length -1
    while(l<r){
        let tmp = a[l]
        a[l] = a[r]
        a[r] = tmp
        l++
        r--

    }
    return a.join("")
}
console.log(reverseString("inbox"));


