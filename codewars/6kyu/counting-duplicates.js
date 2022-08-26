// Solution: Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript
function duplicateCount(text) {
	let uniques = [...new Set(text.toLowerCase().split(''))];
	text = text.toLowerCase().split('');
	let count = 0;

	for (let i = 0; i < uniques.length; i++) {
		let freq = text.filter((x) => x == uniques[i]);
		if (freq.length !== 1) {
			count++;
		}
	}

	return count;
}
