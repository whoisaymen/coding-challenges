// Solution: max diff - easy
// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/
function maxDiff(list) {
	let max = Math.max(...list);
	let min = Math.min(...list);

	return list.length < 1 ? 0 : max - min;
}
