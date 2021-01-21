'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number 🎉';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // For input we use value
// document.querySelector('.guess').value = 100;
// console.log(document.querySelector('.guess').value);

const NUMBER = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(NUMBER);
document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess);
	if (!guess) {
		document.querySelector('.message').textContent = 'No Number';
	} else if (guess === NUMBER) {
		document.querySelector('.message').textContent = 'Correct 🎉';
	} else if (guess > NUMBER) {
		document.querySelector('.message').textContent = 'Too high';
		score--;
		document.querySelector('.score').textContent = score;
	} else {
		document.querySelector('.message').textContent = 'Too low';
		score--;
		document.querySelector('.score').textContent = score;
	}
});
