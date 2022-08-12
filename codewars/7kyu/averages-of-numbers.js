// Solution: Averages of numbers
// https://www.codewars.com/kata/57d2807295497e652b000139/javascript

function averages(numbers) {
	if (numbers == null) return [];
	if (numbers.length < 2) return [];

	let avg = 0;
	let arr = [];
	for (let i = 0; i < numbers.length - 1; i++) {
		avg = (numbers[i] + numbers[i + 1]) / 2;
		arr.push(avg);
	}
	return arr;
}
