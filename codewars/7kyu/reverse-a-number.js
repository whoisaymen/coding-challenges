// Solution: Reverse a Number
function reverseNumber(n) {
	let reversed = Number(Math.abs(n).toString().split("").reverse().join(""));
	return n >= 0 ? reversed : -reversed;
}
