// Solution: Parse float
// https://www.codewars.com/kata/57a386117cb1f31890000039
function parseF(s) {
	console.log(s);
	return isNaN(parseFloat(s)) ? null : parseFloat(s);
}
