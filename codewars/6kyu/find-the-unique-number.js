// Solution: Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/
function findUniq(arr) {
	arr.sort((a, b) => a - b);
	return arr[0] !== arr[1] ? arr[0] : arr[arr.length - 1];
}
