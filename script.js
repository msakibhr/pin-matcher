const generatorDisplay = document.querySelector('.pin-generator input');
const generateButton = document.querySelector('.generate-btn');

let pin = 0;

generateButton.addEventListener('click', () => {
	pin = Math.floor(1000 + Math.random() * 9000);
	generatorDisplay.value = pin;
});

const inputDisplay = document.querySelector('.input-section input');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

zero.addEventListener('click', () => {
	inputDisplay.value = inputDisplay.value + 0;
});
one.addEventListener('click', () => {
	inputDisplay.value = inputDisplay.value + 1;
});
two.addEventListener('click', () => {
	inputDisplay.value = inputDisplay.value + 2;
});
three.addEventListener('click', () => {
	inputDisplay.value = inputDisplay.value + 3;
});
four.addEventListener('click', () => {
	inputDisplay.value = inputDisplay.value + 4;
});
five.addEventListener('click', () => {
	inputDisplay.value = inputDisplay.value + 5;
});
six.addEventListener('click', () => {
	inputDisplay.value = inputDisplay.value + 6;
});
seven.addEventListener('click', () => {
	inputDisplay.value = inputDisplay.value + 7;
});
eight.addEventListener('click', () => {
	inputDisplay.value = inputDisplay.value + 8;
});
nine.addEventListener('click', () => {
	inputDisplay.value = inputDisplay.value + 9;
});
