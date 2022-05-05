// Solution: Remove the minimum
function removeSmallest(numbers) {
	let min = Math.min(...numbers);
	let arr = [];
	let count = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] === min && count == 0) {
			count++;
			continue;
		} else {
			arr.push(numbers[i]);
		}
	}
	return arr;
}
