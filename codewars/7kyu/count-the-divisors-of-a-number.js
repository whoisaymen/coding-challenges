// Solution: Count the divisors of a number
function getDivisorsCnt(n) {
	let count = 0;
	for (let i = 0; i <= n; i++) {
		if (n % i === 0) {
			count++;
		}
	}
	return count;
}
