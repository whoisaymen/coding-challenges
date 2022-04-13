// Solution: Sum of minimums
function sumOfMinimums(arr) {
	return arr.map((n) => n.sort((a, b) => a - b)[0]).reduce((acc, c) => acc + c);
}
