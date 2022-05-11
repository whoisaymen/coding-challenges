// Solution: Count the Digit
function nbDig(n, d) {
	let arr = [];

	for (let i = 0; i <= n; i++) {
		arr.push(i ** 2);
	}

	let str = arr.join("");
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] == `${d}`) {
			count++;
		}
	}

	return count;
}
