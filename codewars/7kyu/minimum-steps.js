// Solution: Minimum Steps (Array Series #6)
// https://www.codewars.com/kata/5a91a7c5fd8c061367000002/javascript
function minimumSteps(numbers, value) {
	let count = 0,
		sum = 0;
	numbers.sort((a, b) => a - b);
	if (numbers[0] + numbers[1] > value) return 0;
	sum += numbers[0] + numbers[1];
	count++;

	numbers.shift();
	numbers.shift();

	while (sum < value) {
		sum += numbers[0];
		count++;
		numbers.shift();
	}
	return count;
}
