// Solution: zipWith
// https://www.codewars.com/kata/5825792ada030e9601000782/javascript
function zipWith(fn, a0, a1) {
	let arr = [];
	for (let i = 0; i < Math.min(a0.length, a1.length); i++) {
		arr.push(fn(a0[i], a1[i]));
	}
	return arr;
}
