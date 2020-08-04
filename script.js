const generatorDisplay = document.querySelector('.pin-generator input');
const generateButton = document.querySelector('.generate-btn');

let pin = 0;

generateButton.addEventListener('click', () => {
	pin = Math.floor(1000 + Math.random() * 9000);
	generatorDisplay.value = pin;
});
