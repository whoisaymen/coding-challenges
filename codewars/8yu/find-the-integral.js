// Solution: Find the Integral
// https://www.codewars.com/kata/59811fd8a070625d4c000013
function integrate(coefficient, exponent) {
	return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}
