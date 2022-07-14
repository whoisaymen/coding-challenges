// Solution: Fibonacci, Tribonacci and friends
// https://www.codewars.com/kata/556e0fccc392c527f20000c5/javascript
function Xbonacci(signature, n) {
	let arr = [],
		length = signature.length;

	for (let i = 0; i < n - length; i++) {
		signature.push(signature.slice(i, i + n).reduce((acc, c) => acc + c, 0));
	}

	return signature.slice(0, n);
}
