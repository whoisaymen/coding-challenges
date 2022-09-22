// Solution: Framed Reflection
// https://www.codewars.com/kata/581331293788bc1702001fa6/javascript
function mirror(text) {
	let words = text.split(' ').map((x) => x.split('').reverse().join(''));
	let length = Math.max(...words.map((x) => x.length));
	let str = '';

	for (let i = 0; i <= words.length + 1; i++) {
		if (i == 0) {
			str += '*'.repeat(length + 4) + '\n';
		} else if (i == words.length + 1) {
			str += '*'.repeat(length + 4);
		} else {
			str += '* ' + words[i - 1] + ' '.repeat(length - words[i - 1].length) + ' *\n';
		}
	}

	return str;
}
