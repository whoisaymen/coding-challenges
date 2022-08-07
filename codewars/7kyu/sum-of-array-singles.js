// Sum of array singles
// https://www.codewars.com/kata/59f11118a5e129e591000134/javascript
function repeats(arr) {
	let single = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr.filter((x) => x == arr[i]).length !== 2) {
			single += arr[i];
		}
	}
	return single;
}
