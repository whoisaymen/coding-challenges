// Solution: Find the first non-consecutive number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/
function firstNonConsecutive(arr) {
	let firstNum = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		if (Math.abs(arr[i + 1] - arr[i]) != 1) {
			firstNum = arr[i + 1];
			console.log(arr, firstNum);
			return firstNum;
		}
	}
	return null;
}
