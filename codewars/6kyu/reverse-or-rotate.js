// Solution: Reverse or rotate?
// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/javascript
function revrot(str, sz) {
	if (sz <= 0 || !str || sz > str.length) return '';

	let arr = [];
	for (let i = 0; i < str.length; i += sz) {
		if (str.slice(i, i + sz).length === sz) {
			arr.push(str.slice(i, i + sz));
		}
	}

	arr = arr.map((x) => {
		if (
			x
				.split('')
				.map((x) => (x = Math.pow(x, 3)))
				.reduce((acc, c) => acc + c, 0) %
				2 ===
			0
		) {
			return x.split('').reverse().join('');
		} else {
			return x.slice(1) + x[0];
		}
	});

	return arr.join('');
}
