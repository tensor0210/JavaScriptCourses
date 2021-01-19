'use strict';

function logger() {
	console.log('My name is Vidit');
}
logger();

function fruitProcessor(apples, orange) {
	console.log(apples, orange);
	const juice = `Juice with ${apples} apple and ${orange}`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
