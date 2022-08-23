// Solution: Does my number look big in this?
// https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript
function narcissistic(value) {
	let num = String(value).split('');
	let sum = num.map((x) => (x = Math.pow(x, num.length)));
	return value === sum.reduce((acc, c) => acc + c);
}
