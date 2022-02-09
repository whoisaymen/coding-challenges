// Solution: Return two highest values in list
function twoHighest(arr) {
	let sortedArr = [...new Set(arr.sort((a, b) => b - a))];
	let highestValues = [];

	if (sortedArr.length === 0) {
		return [];
	} else if (sortedArr.length === 1) {
		highestValues.push(sortedArr[0]);
	} else {
		highestValues.push(sortedArr[0]);
		highestValues.push(sortedArr[1]);
	}

	return highestValues;
}
