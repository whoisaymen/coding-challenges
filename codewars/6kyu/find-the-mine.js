// Find the Mine!
// https://www.codewars.com/kata/528d9adf0e03778b9e00067e/javascript
function mineLocation(field) {
	let arr = [];
	field.forEach((x, i) => {
		if (x.includes(1)) arr.push(i, x.indexOf(1));
	});

	return arr;
}
