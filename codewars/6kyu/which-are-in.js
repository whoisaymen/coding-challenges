// Solution: Which are in?
// https://www.codewars.com/kata/550554fd08b86f84fe000a58/
function inArray(array1, array2) {
	let arr = [];
	for (let i = 0; i < array1.length; i++) {
		for (let j = 0; j < array2.length; j++) {
			if (array2[j].includes(array1[i])) {
				arr.push(array1[i]);
			} else {
				continue;
			}
		}
	}
	return [...new Set(arr.sort())];
}
