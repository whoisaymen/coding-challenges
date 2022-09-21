// Reverse polish notation calculator
// https://www.codewars.com/kata/52f78966747862fc9a0009ae/javascript
function calc(expr) {
	if (!expr) return 0;
	let arr = expr.split(' ').map((x) => (isNaN(parseFloat(x)) ? x : parseFloat(x)));

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == '+') {
			arr[i - 2] = arr[i - 2] + arr[i - 1];
			arr.splice(i - 1, 2);
			i = 0;
		} else if (arr[i] == '*') {
			arr[i - 2] = arr[i - 2] * arr[i - 1];
			arr.splice(i - 1, 2);
			i = 0;
		} else if (arr[i] == '/') {
			arr[i - 2] = arr[i - 2] / arr[i - 1];
			arr.splice(i - 1, 2);
			i = 0;
		} else if (arr[i] == '-') {
			arr[i - 2] = arr[i - 2] - arr[i - 1];
			arr.splice(i - 1, 2);
			i = 0;
		}
	}

	return parseFloat(arr.join(''));
}
