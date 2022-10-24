// Solution: int32 to IPv4
// https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/javascript
function int32ToIp(int32) {
	if (int32 === 0) return '0.0.0.0';
	let num = int32.toString(2),
		arr = [];

	for (let i = num.length; i > 0; i -= 8) {
		if (i <= 32 - 24) {
			arr.push(num.slice(num.length - 24 - i, i));
		} else {
			arr.push(num.slice(i - 8, i));
		}
	}

	return arr
		.map((x) => parseInt(x, 2))
		.reverse()
		.join('.');
}
