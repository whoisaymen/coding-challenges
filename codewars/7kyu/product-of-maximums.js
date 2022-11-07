// Solution: Product Of Maximums Of Array (Array Series #2)
// https://www.codewars.com/kata/5a63948acadebff56f000018/javascript
function maxProduct(numbers, size) {
	numbers.sort((a, b) => b - a);
	let maximum = 1;
	for (let i = 0; i < size; i++) {
		maximum *= numbers[i];
	}
	return maximum;
}
