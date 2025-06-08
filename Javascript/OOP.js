// Create a CustomerOrder class with properties: orderId (string), 
// items (array of objects with name, quantity, price), and status (string).
//  Add a method calculateTotal() that returns the total order amount. 
// Write an async method processPayment() that simulates payment with a Promise 
// that resolves after 2 seconds. After calling the method, change the status to "paid" and print a success message.

class CustomerOrder{
    constructor(orderId, items, status){
        this.orderId = orderId
        this.items = items
        this. status = status
    }
    calculateTotal () {
        let total = 0
        items.map(item =>{
            total += item.quantity * item.price
            
        })
        return total


    };

    async processPayment() {
        console.log(`processing payment for order ${this.orderId}`);
        
     await new Promise(resolve => setTimeout(resolve, 2000));
        
            this.status == "paid"
            if(this.status === "paid"){
                console.log(`Payment successful for ${this.orderId}`)
            } else {
                console.log(`Payment not successful for ${this.orderId}`)
            };
    };
};
                        
            
        
let items = [
    {name:"ugali",quantity:2,price:200},
    {name:"milk",quantity:4,price:50},
    {name:"sugar",quantity:2,price:200}
]
const customer  =  new CustomerOrder("05",items,"not paid")


console.log(customer.calculateTotal());
customer.processPayment()



// 2. Create a TeamMember class that takes name, role, and an array of tasks 
// (each task is an object with title and completed boolean). Write a prototype 
// method completeTask(taskTitle) that marks a task as completed. Write another 
// method checkProgress() that returns a Promise resolving to "All tasks completed!" 
// or rejecting with "Pending tasks remaining" based on the state of the tasks array.

class TeamMember{
    constructor(name,role,tasks){
        this.name = name
        this.role = role
        this.tasks = tasks
    }
    
}

TeamMember.prototype.completeTask = function(taskTitle){
    this.tasks.forEach(element => {
        if(element == taskTitle){
          this.taskCompletion = true
        }
        console.log("Task is completed");
        
    });

}
TeamMember.prototype.checkProgress = async function(){
    return new Promise((resolve, reject) => {
        this.tasks.forEach(element => {
           if( element.taskCompletion == true){
            resolve("All tasks are completed!")

           }else{
            reject("Pending tasks remaining")
           }
            
        })
        
    })
    .then((result)=>{
        console.log({result});
        
    })
    .catch((error)=>{
        console.log({error});
        
    })}


let teamMember = new TeamMember("Mercy","Admin",[{taskTitle:"Login", taskCompletion:true},{taskTitle:"Register",taskCompletion:true}])
teamMember.completeTask("Login")
teamMember.completeTask("Register")
teamMember.checkProgress()

// 3. Build a Candidate class with properties: name, position, and interviews 
// (array of objects with date, status). Add a method scheduleInterview(date) 
// that pushes a new interview with status "pending". Then write an async function 
// sendConfirmation() that returns a Promise that resolves after 1 second with a 
// message "Interview confirmed with [name]", and log the message.

class Candidate{
    constructor(name,position,interviews){
        this.name = name
        this.position = position
        this.interviews = interviews

    }
    scheduleInterview(date){
        this.interviews.push({})
    }
}



