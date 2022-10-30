// Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009/javascript
function arrayDiff(a, b) {
	for (let i = 0; i < b.length; i++) {
		a = a.filter((x) => x !== b[i]);
	}
	return a;
}
