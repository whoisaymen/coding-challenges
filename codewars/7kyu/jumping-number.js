// Solution: Jumping Number (Special Numbers Series #4)
// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/javascript
function jumpingNumber(n) {
	let arr = String(n).split("");
	if (arr.length === 1) {
		return "Jumping!!";
	} else {
		for (let i = 0; i < arr.length - 1; i++) {
			if (Math.abs(arr[i] - arr[i + 1]) === 1) {
				continue;
			} else {
				return "Not!!";
			}
		}
		return "Jumping!!";
	}
}
