// Solution: Most digits
function findLongest(array) {
	let maxLength = Math.max(...array.map((x) => String(x).length));
	let newArr = array.filter((x) => String(x).length == maxLength);
	return newArr[0];
}
