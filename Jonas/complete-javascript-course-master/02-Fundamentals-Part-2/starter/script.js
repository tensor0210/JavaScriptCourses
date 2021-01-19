'use strict';

// function logger() {
// 	console.log('My name is Vidit');
// }
// logger();

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);

// function calcAge(birthYear) {
// 	const age = 2021 - birthYear;
// 	return age;
// }
// console.log(calcAge(1996));

// const calcAge = function(birthYear) {
// 	return 2021 - birthYear;
// };

// const age2 = calcAge(1991);
// console.log(typeof calcAge);

//Arrow Functions
// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1996));

// const yearsUntilRetirement = (birthYear, firstName, lastName) => {
// 	const age = 2021 - birthYear;
// 	const retirement = 65 - age;
// 	return retirement;
// };

// console.log(yearsUntilRetirement(1996));

// function cutFruitPieces(fruit) {
// 	return fruit * 4;
// }

// function fruitProcessor(apples, orange) {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(orange);
// 	console.log(apples, orange);
// 	const juice = `Juice with ${applePieces} apple and ${orangePieces}`;
// 	return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// const scoreDolphins = calcAverage(100, 100, 200);
// const scoreKoalas = calcAverage(65, 23, 71);
// console.log(scoreDolphins, scoreKoalas);
// const checkWinner = function(avgDolphins, avgKoalas) {
// 	if (avgDolphins >= 2 * avgKoalas) {
// 		console.log(`Dolphin wins 🏆`);
// 	} else if (avgKoalas >= 2 * avgDolphins) {
// 		console.log(`Koalas wins 🏆`);
// 	} else {
// 		console.log(`No team wins`);
// 	}
// };

// checkWinner(scoreDolphins, scoreKoalas);

const friends = [
	'Michael',
	'Steven',
	'Peter'
];

const newLength = friends.push('Jay!');

console.log(friends);

friends.unshift(`John`);
console.log(friends);

//Remove Elements
friends.pop(); //Removes last element of the array
console.log(friends);

const popped = friends.pop();
console.log(popped);

console.log(friends);
const removeFirstElement = friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
