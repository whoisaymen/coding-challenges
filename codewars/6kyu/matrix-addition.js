// Solution: Matrix Addition
// https://www.codewars.com/kata/526233aefd4764272800036f/javascript
function matrixAddition(a, b) {
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a[i].length; j++) {
			a[i][j] = a[i][j] + b[i][j];
		}
	}
	return a;
}
