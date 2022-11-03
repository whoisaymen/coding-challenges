// Difference of perfect squares displayed as sum of consecutive odd numbers
// https://www.codewars.com/kata/6359b10f8f2001f29ccf0db4/javascript
function squaresToOdd(sqr1, sqr2) {
	let n = sqr1 - sqr2,
		diffSquares = Math.pow(sqr1, 2) - Math.pow(sqr2, 2),
		minValue = diffSquares / n,
		consecutives = '',
		start = 0;

	if (n % 2 !== 0) {
		start = minValue - Math.floor(n / 2) * 2;
	} else {
		start = minValue + 1 - (n / 2) * 2;
	}

	let count = 0;
	for (let i = 0; i < n; i++) {
		if (i == n - 1) {
			consecutives += `${start + count}`;
		} else {
			consecutives += `${start + count} + `;
			count += 2;
		}
	}

	return `${sqr1}^2 - ${sqr2}^2 = ${consecutives} = ${diffSquares}`;
}
