// Birthday I - Cake
// https://www.codewars.com/kata/5805ed25c2799821cb000005/javascript
function cake(x, y) {
	let sum = y
		.split('')
		.map((x, i) => (i % 2 === 0 ? x.charCodeAt() : x.charCodeAt() - 96))
		.reduce((acc, c) => acc + c, 0);
	return sum <= x * 0.7 ? 'That was close!' : 'Fire!';
}
