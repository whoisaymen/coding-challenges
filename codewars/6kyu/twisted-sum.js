// Solution: Twisted Sum
// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/javascript
function twistedSum(n) {
	let sum = '';
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum.split('').reduce((acc, c) => acc + +c, 0);
}
