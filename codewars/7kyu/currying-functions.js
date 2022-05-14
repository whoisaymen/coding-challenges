// Solution: Currying functions: multiply all elements in an array
// https://www.codewars.com/kata/586909e4c66d18dd1800009b/
function multiplyAll(arr) {
	function double(n) {
		return arr.map((x) => x * n);
	}
	return double;
}
