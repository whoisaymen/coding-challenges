// Solution: Count characters in your string
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript
function count(string) {
	let obj = {};

	for (let i = 0; i < string.length; i++) {
		if (!obj[string[i]]) {
			obj[string[i]] = 1;
		} else {
			obj[string[i]]++;
		}
	}
	return obj;
}
