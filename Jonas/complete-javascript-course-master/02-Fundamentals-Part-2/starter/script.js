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

// const friends = [
// 	'Michael',
// 	'Steven',
// 	'Peter'
// ];

// const newLength = friends.push('Jay!');

// console.log(friends);

// friends.unshift(`John`);
// console.log(friends);

// //Remove Elements
// friends.pop(); //Removes last element of the array
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);

// console.log(friends);
// const removeFirstElement = friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// if (friends.includes('Peter')) {
// 	console.log('You have Peter already in your friends list');
// }

// const bills = [
// 	125,
// 	555,
// 	44
// ];

// const tips = [
// 	calcTip(bills[0]),
// 	calcTip(bills[1]),
// 	calcTip(bills[2])
// ];
// const totals = [
// 	bills[0] + tips[0],
// 	bills[1] + tips[1],
// 	bills[2] + tips[2]
// ];

// console.log(tips, totals);

// console.log(Jonas.lastName);
// console.log(Jonas[`lastName`]);
// const nameKey = 'Name';
// console.log(Jonas[`first${nameKey}`]);
// console.log(`Jonaas has ${Jonas.friends.length} friends`);

// const Jonas = {
// 	firstName         : 'Jonas',
// 	lastName          : 'Scmedtmann',
// 	// age               : 2073 - 1991,
// 	job               : 'teacher',
// 	friends           : [
// 		'Michael',
// 		'Peter',
// 		'Steven'
// 	],
// 	birthYear         : 1996,
// 	hasDriversLicense : true,
// 	// calcAge           : function(birthYear) {
// 	// 	return 2021 - birthYear;
// 	// }
// 	// calcAge           : function() {
// 	// 	console.log(this);
// 	// 	return 2021 - this.birthYear;
// 	// }
// 	calcAge           : function() {
// 		this.age = 2021 - this.birthYear;
// 		return this.age;
// 	},
// 	getSummary        : function() {
// 		return `Name ${this.firstName} and his age is ${this.age} and he
//     ${this.hasDriversLicense ? ' has drivers liscense' : 'Does not have drivers liscense'}

//     `;
// 	}
// };

// console.log(Jonas.calcAge(1996));
// console.log(Jonas[`calcAge`](1996));
// console.log(Jonas[`calcAge`]());
// console.log(Jonas.age);
// console.log(Jonas.getSummary());

// const mark = {
// 	fullName : 'Mark Miller',
// 	mass     : 78,
// 	height   : 1.69,
// 	calcBMI  : function() {
// 		this.BMI = this.mass / this.height ** 2;
// 		return this.BMI;
// 	}
// };

// const john = {
// 	fullName : 'John Smith',
// 	mass     : 92,
// 	height   : 1.95,
// 	calcBMI  : function() {
// 		this.BMI = this.mass / this.height ** 2;
// 		return this.BMI;
// 	}
// };
// console.log(mark.calcBMI());
// console.log(mark.BMI);

// console.log(john.calcBMI());

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

const JonasArray = [
	'Jonas',
	'Schmedtmann',
	2037 - 1996,
	'teacher',
	[
		'Michael',
		'Peter',
		'Steven '
	],
	true
];

// const types = [];

// for (let i = 0; i < JonasArray.length; i++) {
// 	console.log(JonasArray[i]);
// 	types[i] = typeof JonasArray[i];
// }

// console.log(types);

//continue and break the loop

// for (let i = JonasArray.length - 1; i >= 0; i--) {
// 	if (typeof JonasArray[i]) {
// 		let elementLength = JonasArray[i].length;
// 		for (let j = 0; j < elementLength; j++) {
// 			console.log(JonasArray[i][j]);
// 		}
// 	} else {
// 		console.log(JonasArray[i]);
// 	}
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

// while (dice != 6) {
// 	console.log(`You  rolled ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6)
// }

const bills = [
	22,
	295,
	176,
	440,
	37,
	105,
	10,
	1100,
	86,
	52
];

const tips = [];
const totals = [];

const calcTip = (bill) => {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i]);
	tips.push(tip);
	totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum / arr.length;
};

const temperature = [
	3,
	-2,
	-6,
	-1,
	'error',
	9,
	13,
	17,
	15,
	14,
	9,
	5
];

const calcTempAmplitude = function(temp) {
	let max = temp[0];
	let min = temp[1];
	for (let i = 0; i < temp.length; i++) {
		if (temp[i] > max) {
			max = temp[i];
		}
		if (temp[i] < min) {
			min = temp[i];
		}
	}
	return max - Math.abs(min);
};

console.log(calcTempAmplitude(temperature));
