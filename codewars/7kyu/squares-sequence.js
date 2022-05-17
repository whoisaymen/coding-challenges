// Solution: Squares sequence
// https://www.codewars.com/kata/5546180ca783b6d2d5000062/
function squares(x, n) {
	let arr = [];
	arr[0] = x;
	for (let i = 1; i < n; i++) {
		arr.push(arr[i - 1] ** 2);
	}
	return n <= 0 ? [] : arr;
}
