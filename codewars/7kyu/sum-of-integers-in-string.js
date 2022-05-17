// Solution: Sum of integers in string
// https://www.codewars.com/kata/598f76a44f613e0e0b000026/
function sumOfIntegersInString(s) {
	let arr = [];
	let num = "";
	for (let i = 0; i < s.length; i++) {
		if (s[i] >= "0" && s[i] <= "9") {
			num += s[i];
			if (i === s.length - 1) {
				arr.push(num);
			}
		} else {
			arr.push(num);
			num = "";
		}
	}
	return arr
		.map(Number)
		.filter((x) => x !== NaN)
		.reduce((acc, c) => acc + c, 0);
}
