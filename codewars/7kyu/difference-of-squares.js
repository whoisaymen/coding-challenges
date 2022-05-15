// Solution: Difference Of Squares
// https://www.codewars.com/kata/558f9f51e85b46e9fa000025/

function differenceOfSquares(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	return (
		Math.pow(
			arr.reduce((acc, c) => acc + c, 0),
			2
		) - arr.reduce((acc, c) => acc + c ** 2, 0)
	);
}
