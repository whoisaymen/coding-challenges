// Solution: Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4/
var countBits = function (n) {
	return n
		.toString(2)
		.split('')
		.filter((n) => n === '1').length;
};
