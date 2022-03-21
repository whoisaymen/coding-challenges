// Solution: Sum of all the multiples of 3 or 5
function findSum(n) {
	let arr = [];
	for (let i = 0; i <= n; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			arr.push(i);
		}
	}
	return arr.reduce((acc, c) => acc + c);
}
