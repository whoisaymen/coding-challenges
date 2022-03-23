// Solution: Find the middle element
function gimme(triplet) {
	let arr = triplet.map((x) => x);
	let sortedArr = arr.sort((a, b) => a - b);
	return triplet.indexOf(sortedArr[1]);
}
