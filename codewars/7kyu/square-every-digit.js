// Solution: Square every digit
function squareDigits(num) {
	return Number(
		String(num)
			.split("")
			.map((n) => n * n)
			.join("")
	);
}
