// Solution: Narcissistic Numbers
// https://www.codewars.com/kata/56b22765e1007b79f2000079/
function isNarcissistic(n) {
	return (
		n ===
		n
			.toString()
			.split("")
			.reduce((res, num, index, arr) => (res += Math.pow(num, arr.length)), 0)
	);
}
