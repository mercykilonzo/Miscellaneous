
const person={
    name: 'Jane',
    age: 22,
    height: '150 cm',
    greet: function(){
        console.log(`Hello there ${this.name}`);        
    }

};
console.log(person.age);
console.log(person['age']);

person.nationality = 'Rwandese'
console.log(person);

person.age =23;
console.log(person);

delete person.nationality;
console.log(person);

person.greet();

person.introduce = () => {
    console.log(`My name is ${person.name} and I am ${person.age} years old`);
    
};
person.introduce();


const scores = [{score:50, name:'Jane'}, {name:'Max', score: 20},{name: 'John', score:70}, {name: 'Jackie', score:60} ];

function getStudentsScores(scores) {
  return scores.filter(sscore => sscore.score >= 50)

};
console.log(getStudentsScores(scores));


function Car(color, model, brand){
    this.color = color;
    this.model = model;
    this.brand = brand;
    this.introduce = function(){
        return `This is a ${this.brand} ${this.model}`
    }
};
const car = new Car ('black',' Harrier', 'Toyota')
console.log(car);
console.log(car.introduce());


function getVowelCount(sentence){
  let count = 0
  const vowels = [a,e,i,o,u]
  const a = sentence.split("")
  for (letter in a){
    if (vowels.includes(letter)){
      count++;

    } 
  }
  return count
};
console.log(getVowelCount("I love coding"))









