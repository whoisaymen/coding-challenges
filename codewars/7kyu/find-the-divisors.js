// Solution: Find the divisors!
function divisors(integer) {
	let arr = [];
	for (let i = 2; i < integer; i++) {
		if (integer % i === 0) {
			arr.push(i);
		}
	}

	return arr.length > 1 ? arr : `${integer} is prime`;
}
