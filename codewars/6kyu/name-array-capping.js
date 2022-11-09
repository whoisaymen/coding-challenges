// Solution: Name Array Capping
// https://www.codewars.com/kata/5356ad2cbb858025d800111d/javascript
function capMe(names) {
	return names.map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase());
}
