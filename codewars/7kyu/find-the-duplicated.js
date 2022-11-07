// Solution: Find The Duplicated Number in a Consecutive Unsorted List
// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/javascript
function findDup(arr) {
	for (let i = 0; i < arr.length; i++) {
		let freq = arr.filter((x) => x === arr[i]).length;
		if (freq > 1) return arr[i];
	}
}
