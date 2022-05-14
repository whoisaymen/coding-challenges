// Solution: Extra Perfect Numbers (Special Numbers Series #7)
// https://www.codewars.com/kata/5a662a02e626c54e87000123/javascript
function extraPerfect(n) {
	let arr = [];

	for (let i = 1; i <= n; i += 2) arr.push(i);

	return arr;
}
