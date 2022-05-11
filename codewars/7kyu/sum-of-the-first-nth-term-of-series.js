// Solution: Sum of the first nth term of Series
function SeriesSum(n) {
	let sum = 0;
	let fact = 1;
	for (let i = 0; i < n; i++) {
		sum += 1 / fact;
		fact += 3;
	}
	return sum.toFixed(2).toString();
}
