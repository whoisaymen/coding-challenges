// // Solution: Recursion #1 - Factorial
// https://www.codewars.com/kata/5694cb0ec554589633000036/
const factorial = (n) => {
	if (n == 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
};
