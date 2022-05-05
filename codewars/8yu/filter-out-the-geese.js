// Solution: Filter out the geese
function gooseFilter(birds) {
	let arr = [];
	for (let i = 0; i < birds.length; i++) {
		if (
			birds[i].includes("African") ||
			birds[i].includes("Roman Tufted") ||
			birds[i].includes("Toulouse") ||
			birds[i].includes("Pilgrim") ||
			birds[i].includes("Steinbacher")
		) {
			continue;
		} else {
			arr.push(birds[i]);
		}
	}
	return arr;
}
