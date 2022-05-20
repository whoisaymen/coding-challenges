// Solution: Maximum Gap (Array Series #4)
// https://www.codewars.com/kata/5a7893ef0025e9eb50000013/
function maxGap(numbers) {
	numbers = numbers.sort((a, b) => a - b);
	let num = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (Math.abs(numbers[i] - numbers[i + 1]) > num) {
			num = Math.abs(numbers[i] - numbers[i + 1]);
		} else {
			continue;
		}
	}
	return num;
}
