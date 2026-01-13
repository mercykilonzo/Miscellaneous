
const getInventory = (inventory) =>{
for(let i= 0; i<inventory.length;i++){
    if(inventory[i] ==0){
        console.log("Item not found");
        
    }
    else{
        console.log("Item found");
        
    }

}};

const inventory = [20,40,0,10,5,0]
getInventory(inventory)

function gradingScores(scores){
    scores.forEach(score => {
        if(score>=85){
            
            console.log(`Your score is ${score} and your grade is A`);
            
        }
        else if(score<85 && score>=70){
            console.log(`Your score is ${score} and your grade is B`);
            
        }
        else if(score<70 && score>=65){
            console.log(`Your score is ${score} and your grade is C`);
            
        }
        else if(score<65 && score>=50){
            console.log(`Your score is ${score} and your grade is D`);
            
        }
        else{
            console.log(`Your score is ${score} and your grade is E`);
            
        }        
    })
};
const scores =[85,95,25,50,40,60,70]
gradingScores(scores)


const loginAttempts=()=>{
    let attempts =1;
    while(attempts<=3){
        console.log(`login attempts ${attempts}`);
        attempts++;
        
    }
};
loginAttempts();

const loginAttemptsWithDoWhile = ()=>{
    let attempts =1;
    do{
        console.log(`login attempts with do...while ${attempts}`);
        attempts++;
        
    }while(attempts<=3)

};
loginAttemptsWithDoWhile();

const getNotifications =(notifications) =>{
    notifications.forEach(notification =>{
        switch(notification){
            case 'sms':
            case 'text':    
                console.log('Send sms');
                break;
            case 'email':
                console.log('Send email');
                break;
            case 'push':
                console.log('Send push');
                break;
            default:
                console.log('Notification not supported');
                break;               
                       
        }
    })};
    const notifications = ['sms','email','push','text']
    getNotifications(notifications)

    function getAccess(roles){
        roles.forEach(role =>{
            switch(role){
                case 'admin':
                    console.log(`${role} access`);
                    break;
                case 'commentor':
                    console.log(`${role} access`);
                    break;
                case 'viewer':
                    console.log(`${role} access`);
                    break;
                default:
                    console.log('Role not supported');
                    break;                      

            }


    })};
    const roles= ['admin','commentor','viewer']
    getAccess(roles)

    function adultOrMinor(ages){
        for(let i = 0; i < ages.length; i++){
            if(ages[i]< 18){
                console.log("Minor");
                
            }
            else{console.log("Adult");
            }
        }
    };
    let ages = [5,20,36,10,27,30]
    adultOrMinor(ages)


      function grades(grade){
        grade.forEach(g =>{
            switch(g){
                case 90 || 100:
                    console.log(`A`);
                    break;
        
                default:
                    console.log('Role not supported');
                    break;                      

            }


    })};

    grades([50,90,70,80,100])