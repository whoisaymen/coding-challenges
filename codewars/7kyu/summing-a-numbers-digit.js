// Solution: Summing a number's digit
function sumDigits(number) {
	return String(Math.abs(number))
		.split("")
		.map((n) => Number(n))
		.reduce((a, c) => a + c);
}
