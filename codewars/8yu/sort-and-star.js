// Solution: Sort and Star
function twoSort(s) {
	let sortedArr = s.sort();
	let firstEl = sortedArr[0];
	return firstEl.split("").join("***");
}
