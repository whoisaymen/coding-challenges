// Solution: Good vs Evil
// https://www.codewars.com/kata/52761ee4cffbc69732000738/javascript

let objGood = { 1: 1, 2: 2, 3: 3, 4: 3, 5: 4, 6: 10 };
let objBad = { 1: 1, 2: 2, 3: 2, 4: 2, 5: 3, 6: 5, 7: 10 };

function goodVsEvil(good, evil) {
	console.log(good, ' = ', evil);
	let sumGood = good
		.split(' ')
		.map(Number)
		.map((x, i) => x * objGood[i + 1])
		.reduce((acc, c) => acc + c);
	let sumEvil = evil
		.split(' ')
		.map(Number)
		.map((x, i) => x * objBad[i + 1])
		.reduce((acc, c) => acc + c);
	console.log(sumGood, ' = ', sumEvil, ' ?');

	return sumGood === sumEvil
		? 'Battle Result: No victor on this battle field'
		: sumGood > sumEvil
		? 'Battle Result: Good triumphs over Evil'
		: 'Battle Result: Evil eradicates all trace of Good';
}
