// Solution: Duplicate Encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript
function duplicateEncode(word) {
	word = word.toLowerCase();
	let str = '';
	for (let i = 0; i < word.length; i++) {
		if (word.split('').filter((x) => x == word[i]).length > 1) {
			str += ')';
		} else {
			str += '(';
		}
	}
	return str;
}
