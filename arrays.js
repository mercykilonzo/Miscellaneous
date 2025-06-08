// On your website’s sign-up form, users often type their names in all lowercase, 
// uppercase,or with extra spaces. For example, someone might enter “alice” instead of “Alice”. 
// You want the system to clean up the name before using it. After processing the name, 
// the system should display: Welcome, Alice.

let a = " aLIce";
let b = a.trim();
let c = b.charAt(0).toUpperCase() + b.slice(1).toLowerCase();
greeting = `Welcome ${c}`
console.log(greeting);

// You’re building a chatbot to support people when they’re feeling down.
//  A user might type something like “HELP”, “can you help me?” or “i need HELP!”. 
// If the message seems like a request for help, the bot should respond with: 
// I’m here for you. Otherwise, it says: How else can I assist you?

let message = "can you Help me?"
 if(message.match(/help/i))
 {
    response = "I’m here for you"
   
 }
 else{
    response = "How else can I assist you?"

};
console.log(response);
// another method
let rsp = message.toLowerCase().includes("help") ? "I’m here for you": "How else can I assist you?"
console.log({rsp});


//  On your email sign-up page, users enter their email addresses freely. 
// Some entries are correct, like “user@eaxample.com”, but others forget the @ or
//  end with something like .org. If the email includes an @ symbol and ends with .com, show: 
// Thanks for subscribing!. Otherwise, display: Please enter a valid email address.

let email = "user@eaxample.com";
if(email.includes("@") && email.endsWith(".com")){
    result = "Thanks for subscribing!"
}
else{
    result = "Please enter a valid email address"
}
console.log({result});

// or
let display= email.includes("@") && email.endsWith(".com") ? "Thanks for subscribing!": "Please enter a valid email address"
console.log({display});

// A friend is trying to name their new shop. 
// The name should be short and simple - between 5 and 15 characters, with no spaces. 
// When a name is entered, the system should either say: 
// Name accepted. or Please choose a different name.

let shop = "niceshop"
if (!shop.includes(" ") && 5<shop.length<15){
  print ="Name accepted"
  }
else{
    print="Please choose a different name" 
};
console.log({print});

let shopName = !shop.includes(" ") && 5<shop.length<15 ? "Name accepted": "Please choose a different name" 
console.log({shopName});

// In your text-based adventure game, a player can respond however they like 
// when asked a yes-or-no question. Some type “yes”, “Yes!”, “Yup”, or “yeah”. 
// If the system can tell they mean yes, it should show: You chose to continue. 
// Otherwise, it should say: You chose to stop.

let text = "yess "
let dis = text.includes("Yes" ||"Yes!"|| "Yup" ||"yeah") ? "You chose to continue": "You chose to stop";
console.log({dis});
let texty = text.toLowerCase()

if(texty=="Yes"||"Yes!"||"Yup"|| "yeah"){
    answer="You chose to continue"
}
else{
    answer = "You chose to stop"
}
console.log({answer});

const array = [1, 2, 3, 2, 4, 5, 4, 5];

const duplicates = array.filter((item, index) => array.indexOf(item) !== index);

console.log(duplicates); // Output: [2, 4, 5]