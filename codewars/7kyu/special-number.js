// Solution: Special Number (Special Numbers Series #5)
// https://www.codewars.com/kata/5a55f04be6be383a50000187/javascript
function specialNumber(n) {
	let str = String(n);
	for (let i = 0; i < str.length; i++) {
		if (
			str[i] === "0" ||
			str[i] === "1" ||
			str[i] === "2" ||
			str[i] === "3" ||
			str[i] === "4" ||
			str[i] === "5"
		) {
			continue;
		} else {
			return "NOT!!";
		}
	}
	return "Special!!";
}
