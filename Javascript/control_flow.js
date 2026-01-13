
// Write a program that takes an array of days like "Mon", "Tue", and "Fri" 
// and uses a switch statement to print what type of delivery is scheduled on each day.
function delivery(days){
    days.forEach(day => {
    switch (day) {
        case "Mon":
            console.log("Door to door delivery");          
            break;
        case "Tue":
            console.log("In house delivery");          
            break;    
        case "Fri":
            console.log("Door delivery");          
            break;
        default:
            console.log("no delivery to be done");
            
            break;
    }
      })};
  
const days = ["Mon","Tue","Fri","Sat"]   
delivery(days)    

// Create a program that loops through an array of book statuses and prints "Ready 
// to lend" if the status is "available" or "Checked out" if the status is "borrowed".

function bookStatus(statuses){
    for(let i =0;i<statuses.length;i++){
        if(statuses[i] == "available"){
            console.log("Ready to lend");
            
        }else if(statuses[i]== "borrowed"){
            console.log("checked out");
            
        }}
};

let statuses = ["available", "borrowed"]
bookStatus(statuses)

// Write a program using a while loop that simulates a countdown of lives in a game starting
//  from 5 and prints "You have X lives left" on each loop until it reaches 0.

function gameCountDown(){
    let count = 5;
    while (count >= 0) {
        console.log(`You have ${count} lives left`);
       count--;        
    }
}
gameCountDown()

// Using a do...while loop, write a program that loops through an array of user feedback and 
// prints each comment until the array is empty.

function userFeedback(feedbacks){
    do(
        console.log(feedbacks.pop())
    )
    while(feedbacks.length > 0)
}
userFeedback(["I love coding","coding is fun","i like coding"])
