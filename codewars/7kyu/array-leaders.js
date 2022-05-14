// Solution: Array Leaders (Array Series #3)
// https://www.codewars.com/kata/5a651865fd56cb55760000e0/
function arrayLeaders(numbers) {
	let arr = [];
	for (let i = 0; i < numbers.length; i++) {
		let sum = numbers.slice(i + 1).reduce((acc, c) => acc + c, 0);
		if (numbers[i] > sum) {
			arr.push(numbers[i]);
		} else {
			continue;
		}
	}
	return arr;
}
