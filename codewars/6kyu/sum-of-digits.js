// Solution: Sum of Digits / Digital Root
// https://www.codewars.com/kata/541c8630095125aba6000c00/
function digital_root(n) {
	while (n.toString().length > 1) {
		n = n
			.toString()
			.split('')
			.reduce((acc, c) => +acc + +c, 0);
	}
	return n;
}
