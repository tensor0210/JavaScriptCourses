'use strict';

const restaurant = {
	name          : 'Classico Italiano',
	location      : 'Via Angelo Tavanti 23, Firenze, Italy',
	categories    : [
		'Italian',
		'Pizzeria',
		'Vegetarian',
		'Organic'
	],
	starterMenu   : [
		'Focaccia',
		'Bruschetta',
		'Garlic Bread',
		'Caprese Salad'
	],
	mainMenu      : [
		'Pizza',
		'Pasta',
		'Risotto'
	],
	order         : function(starterIndex, mainIndex) {
		return [
			this.starterMenu[starterIndex],
			this.mainMenu[mainIndex]
		];
	},
	orderDelivery : function({ starterIndex, mainIndex, time, address }) {
		console.log(
			`Order Received! ${this.starterMenu[starterIndex]} ${this.mainMenu[mainIndex]} at ${address} at ${time} `
		);
	},

	openingHours  : {
		thu : {
			open  : 12,
			close : 22
		},
		fri : {
			open  : 11,
			close : 23
		},
		sat : {
			open  : 0, // Open 24 hours
			close : 24
		}
	}
};

// const arr = [
// 	7,
// 	8,
// 	9
// ];

// const newArr = [
// 	1,
// 	2,
// 	...arr
// ];

// console.log(newArr);

// const newMenu = [
// 	...restaurant.mainMenu,
// 	'Gnocci'
// ];
// console.log(newMenu);

// const mainMenu = [
// 	...restaurant.mainMenu
// ];
// const menu = [
// 	...restaurant.starterMenu,
// 	...restaurant.mainMenu
// ];
// console.log(menu);
// const str = 'Jonas';
// const letters = [
// 	...str
// ];
// console.log(letters);
// restaurant.orderDelivery({ time: '22:30', address: 'Parel', mainIndex: 2, starterIndex: 2 });
// const arr = [
// 	2,
// 	3,
// 	4
// ];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [
// 	x,
// 	y,
// 	z
// ] = arr;

// console.log(x, y, z);

// let [
// 	first,
// 	second
// ] = restaurant.categories;
// console.log(first, second);

// let [
// 	firsr,
// 	,
// 	third
// ] = restaurant.categories;

// console.log(first, third);

// [
// 	main,
// 	secondary
// ] = [
// 	secondary,
// 	main
// ];
// const [
// 	starter,
// 	main
// ] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

// const nested = [
// 	2,
// 	4,
// 	[
// 		5,
// 		6
// 	]
// ];

// const [
// 	i,
// 	,
// 	[
// 		j,
// 		k
// 	]
// ] = nested;
// console.log(i, j, k);

// //Default values;
// const [
// 	p = 1,
// 	q = 1,
// 	r = 1
// ] = [
// 	8,
// 	9
// ];

// console.log(p, q, r);

const { name: restaurantName, openingHours, categories } = restaurant;
// console.log(restaurantName, openingHours, categories);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

//Nested Objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);
