// Solution: Consecutive strings
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/
function longestConsec(strarr, k) {
	if (strarr.length == 0 || k > strarr.length || k <= 0) return "";
	let arr = [];
	let str = "";
	let length = 0;
	let longestStr = "";
	for (let i = 0; i < strarr.length; i++) {
		for (let j = 0; j < k; j++) {
			if (strarr[i + j] !== undefined) {
				str += strarr[i + j];
			}
		}
		if (str.length > length) {
			length = str.length;
			longestStr = str;
		}
		arr.push(str);
		str = "";
	}
	return longestStr;
}
