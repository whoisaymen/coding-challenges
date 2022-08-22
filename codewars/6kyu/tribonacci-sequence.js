// Tribonacci Sequence
// https://www.codewars.com/kata/556deca17c58da83c00002db/javascript
function tribonacci(signature, n) {
	console.log(signature, n);
	let arr = [];
	let sum = 0;
	for (let i = 0; i < n; i++) {
		if (i >= 0 && i < 3) {
			arr.push(signature[i]);
		} else {
			sum += arr[i - 3] + arr[i - 2] + arr[i - 1];
			arr.push(sum);
			sum = 0;
		}
	}
	return arr;
}
