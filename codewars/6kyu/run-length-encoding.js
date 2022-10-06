// Solution: Run-length encoding
// https://www.codewars.com/kata/546dba39fa8da224e8000467/javascript
var runLengthEncoding = function (str) {
	if (!str) return [];
	let count = 1,
		arr = [],
		container = [],
		letter = '';

	for (let i = 0; i < str.length; i++) {
		if (str[i] === ' ') {
			count = 1;
		}

		letter = str[i];
		if (str[i] === str[i + 1]) {
			count++;
		} else {
			arr.push(count, letter);
			container.push(arr);
			arr = [];
			count = 1;
		}
	}
	return container;
};
