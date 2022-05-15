// Solution: Alternate case
// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/javascript
function alternateCase(s) {
	return s
		.split("")
		.map((x) => {
			if (x === x.toUpperCase()) return (x = x.toLowerCase());
			if (x === x.toLowerCase()) return (x = x.toUpperCase());
		})
		.join("");
}
