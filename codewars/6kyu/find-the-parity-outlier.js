// Solution: Find The Parity Outlier
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/
function findOutlier(integers) {
	return integers.filter((n) => n % 2 === 0).length === 1 ? +integers.filter((n) => n % 2 === 0) : +integers.filter((n) => n % 2 != 0);
}
