
function Person(name,age,skincolor,personality){
    this.name = name
    this.age = age
    this.skincolor =skincolor
    this.personality = personality

}
Person.prototype.height = "155"
const person = new Person("Jane", 23, "brown", "Rwanda")
console.log(person);
console.log(person.height);

Person.prototype.name ="James"
console.log(Person.prototype.name);

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and my height is ${this.height}`);
  };
  
  person.greet()
  console.log(person.height);
  

function Driver(name,carModel,rating){
    this.name = name
    this.carModel =carModel
    this.rating =rating

}
Driver.prototype.getDetails = function(){
    return `The driver's name is ${this.name} and the car model is ${this.carModel}`
};
Driver.prototype.isTopRated = function(){
    if (this.rating > 4.5){
        return true
    } else {
        return false
    }

};

const driver1 = new Driver("John","Toyota","5")
console.log(driver1.getDetails());
console.log(driver1.isTopRated());


const driver2 = new Driver("Joy","Jeep","3.5")
console.log(driver2.getDetails());
console.log(driver2.isTopRated());



class Student {
    constructor(name,course,score) {
    this.name = name;
    this.course = course;
    this.score = score;
  }

    
    ispassing() {
        if (this.getAverageScore() >= 50){
            return true
        } else {
            return false
        }       
    }

    totalScores(){
       let sum = this.score.reduce((perv,cur)=>perv+cur,0)
        return sum

    }
}

Student.prototype.getAverageScore = function(){
   let average = this.totalScores()/this.score.length
   return average
}

student = new Student("Mercy","Javascript",[60,90,80,70])
console.log(student.ispassing());
console.log(student.getAverageScore());
console.log(student.totalScores());








