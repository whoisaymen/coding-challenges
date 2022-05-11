// Solution: Find the stray number
function stray(numbers) {
	numbers.sort((a, b) => a - b);
	let num1 = numbers.filter((x) => x == numbers[0]).length;
	let num2 = numbers.filter((x) => x == numbers[numbers.length - 1]).length;
	return num1 > num2 ? numbers[numbers.length - 1] : numbers[0];
}
