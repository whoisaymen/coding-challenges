// Solution: Calculate String Rotation
// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014/javascript
function shiftedDiff(first, second) {
	if (first == second) return 0;

	let firstSplit = first.split('');
	for (let i = 0; i < first.length; i++) {
		//     let n =
		firstSplit.shift();
		if (firstSplit.join('') + first.slice(0, i + 1) === second) {
			return Math.abs(first.indexOf(first[i]) - second.indexOf(first[i]));
		}
	}

	return -1;
}
