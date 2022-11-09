// Solution: Array element parity
// https://www.codewars.com/kata/5a092d9e46d843b9db000064/javascript
function solve(arr) {
	return arr.filter((x) => !arr.includes(-x))[0];
}
