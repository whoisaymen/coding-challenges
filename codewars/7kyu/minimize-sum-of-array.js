// Solution: Minimize Sum Of Array (Array Series #1)
function minSum(arr) {
	let res = [];
	let product = 0;
	arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length / 2; i++) {
		product = arr[i] * arr[arr.length - 1 - i];
		res.push(product);
	}
	return res.reduce((acc, c) => acc + c);
}
