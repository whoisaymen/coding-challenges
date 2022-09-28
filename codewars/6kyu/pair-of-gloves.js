// Solution: Pair of gloves
// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/javascript
function numberOfPairs(gloves) {
	let count = 0,
		uniques = [...new Set(gloves)];

	for (let i = 0; i < uniques.length; i++) {
		const pieces = gloves.filter((x) => x === uniques[i]).length;

		if (pieces / 2 >= 1) {
			count += Math.floor(pieces / 2);
		}
	}
	return count;
}
