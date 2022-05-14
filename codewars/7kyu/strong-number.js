// Solution: Strong Number (Special Numbers Series #2)
// https://www.codewars.com/kata/5a4d303f880385399b000001/javascript
function strong(n) {
	let sum = n
		.toString()
		.split("")
		.reduce((acc, c) => acc + factorial(c), 0);
	return sum === n ? "STRONG!!!!" : "Not Strong !!";
}

function factorial(n) {
	if (n == 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
