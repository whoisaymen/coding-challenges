// Solution: Playing with digits
// https://www.codewars.com/kata/5552101f47fc5178b1000050/
function digPow(n, p) {
	let sumDigits = String(n)
		.split("")
		.map(Number)
		.map((x, i) => x ** (p + i))
		.reduce((acc, c) => acc + c);
	console.log(n, p, sumDigits);
	return Math.floor(sumDigits / n) === sumDigits / n ? sumDigits / n : -1;
}
