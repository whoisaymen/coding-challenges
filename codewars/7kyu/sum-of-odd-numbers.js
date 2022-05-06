// Solution: Sum of odd numbers
function rowSumOddNumbers(n) {
	let num = 0;
	for (let i = 0; i < n; i++) {
		num = 1 + (i + 1) * i;
	}

	for (let i = 1; i < n; i++) {
		num += 2;
	}
	return num;
}
