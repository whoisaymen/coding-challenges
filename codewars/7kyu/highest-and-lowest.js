// Solution: Highest and Lowest
function highAndLow(numbers) {
	let arr = numbers.split(" ");
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return `${max} ${min}`;
}
