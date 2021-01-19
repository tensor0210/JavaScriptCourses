'use strict';

// function logger() {
// 	console.log('My name is Vidit');
// }
// logger();

// function fruitProcessor(apples, orange) {
// 	console.log(apples, orange);
// 	const juice = `Juice with ${apples} apple and ${orange}`;
// 	return juice;
// }

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
const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1996));

const yearsUntilRetirement = (birthYear, firstName, lastName) => {
	const age = 2021 - birthYear;
	const retirement = 65 - age;
	return retirement;
};

console.log(yearsUntilRetirement(1996));
