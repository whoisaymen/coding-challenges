// Solution: Split Strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/javascript
function solution(str) {
	let arr = [];
	let string = '';
	for (let i = 0; i < str.length; i += 2) {
		string += str[i];
		if (i !== str.length - 1) {
			string += str[i + 1];
		}

		if (str.length % 2 !== 0 && i == str.length - 1) {
			string += '_';
		}

		arr.push(string);
		string = '';
	}
	return arr;
}
