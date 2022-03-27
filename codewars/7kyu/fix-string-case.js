// Solution: Fix string case
function solve(s) {
	let countUpper = 0;
	let countLower = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i].toLowerCase()) {
			countLower++;
		} else {
			countUpper++;
		}
	}

	return countUpper === countLower
		? s.toLowerCase()
		: countUpper > countLower
		? s.toUpperCase()
		: s.toLowerCase();
}
