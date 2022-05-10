// Solution: Sort Out The Men From Boys
function menFromBoys(arr) {
	let evens = [];
	let odds = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			odds.unshift(arr[i]);
		} else {
			evens.unshift(arr[i]);
		}
	}
	evens.sort((a, b) => a - b);
	odds.sort((a, b) => b - a);

	return [...new Set(evens.concat(odds))];
}
