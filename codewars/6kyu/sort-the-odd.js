// Solution: Sort the odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript
function sortArray(array) {
	console.log(array);
	let odds = array.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
	let sortedArray = [];
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 == 0) {
			sortedArray.push(array[i]);
		} else {
			sortedArray.push(odds[count]);
			count++;
		}
	}

	return sortedArray;
}
