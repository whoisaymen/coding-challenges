// Solution: Palindrome for your Dome
// https://www.codewars.com/kata/53046ceefe87e4905e00072a/javascript
function palindrome(string) {
	string = string.toLowerCase();

	let str = '',
		arr = [];
	for (let i = 0; i < string.length; i++) {
		if (string[i] >= 'a' && string[i] <= 'z') {
			str += string[i];
			arr.unshift(string[i]);
		}
	}

	return arr.join('') == str;
}
