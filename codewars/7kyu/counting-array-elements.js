// Solution: Counting Array Elements
// https://www.codewars.com/kata/5569b10074fe4a6715000054/

function count(array) {
	let obj = {};
	let count = 0;
	let uniques = [...new Set(array)];
	for (let i = 0; i < uniques.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (uniques[i] === array[j]) {
				count++;
			}
		}
		obj[uniques[i]] = count;
		count = 0;
	}
	return obj;
}
