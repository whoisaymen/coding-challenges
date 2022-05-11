// Solution: Find the nth Digit of a Number
var findDigit = function (num, nth) {
	if (nth <= 0) {
		return -1;
	} else {
		for (let i = 0; i < nth - 1; i++) {
			num /= 10;
		}
		return Math.floor(Math.abs(num % 10));
	}
};
