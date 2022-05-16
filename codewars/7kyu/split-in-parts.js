// Solution: Split In Parts
// https://www.codewars.com/kata/5650ab06d11d675371000003/

var splitInParts = function (s, partLength) {
	let str = "";
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		if (count === partLength) {
			str += " ";
			count = 0;
		}
		str += s[i];
		count++;
	}
	return str;
};
