const container = document.getElementById('container');
const heading = document.getElementById('heading');


console.log('previous-sibling', container.previousElementSibling);
console.log('next-sibling', container.nextElementSibling);

// create new element

const newParagraph = document.createElement('p');
container.appendChild(newParagraph);
newParagraph.textContent = 'This is a new paragraph';

newParagraph.setAttribute('class', 'new-paragraph');
newParagraph.style.color = 'blue';

// Event listeners

const clickButton = document.getElementById('click-button');
clickButton.addEventListener('click',()=>{
    clickButton.style.backgroundColor = 'red';
    clickButton.textContent = 'Clicked!!'
});

clickButton.onclick = () =>{
    heading.textContent = 'This is fun!!'
};


