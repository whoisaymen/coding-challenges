// Solution: Two oldest ages
function twoOldestAges(ages) {
	let arr = ages.sort((a, b) => b - a);
	return [arr[1], arr[0]];
}
