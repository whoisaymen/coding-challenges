// Solution: Nth Smallest Element (Array Series #4)
// https://www.codewars.com/kata/5a512f6a80eba857280000fc/javascript
function nthSmallest(arr, pos) {
	let sorted = arr.sort((a, b) => a - b);

	return sorted[pos - 1];
}
