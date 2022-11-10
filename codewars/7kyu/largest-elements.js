// Largest Elements
// https://www.codewars.com/kata/53d32bea2f2a21f666000256/javascript
function largest(n, xs) {
	xs.sort((a, b) => b - a);
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(xs[i]);
	}
	return arr.sort((a, b) => a - b);
}
