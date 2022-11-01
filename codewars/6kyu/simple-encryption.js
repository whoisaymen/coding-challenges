// Simple Encryption #1 - Alternating Split
// https://www.codewars.com/kata/57814d79a56c88e3e0000786/javascript
function encrypt(text, n) {
	if (!text) return text;
	let str = text;
	for (let i = 0; i < n; i++) {
		str =
			str
				.split('')
				.filter((x, i) => i % 2 != 0)
				.join('') +
			str
				.split('')
				.filter((x, i) => i % 2 == 0)
				.join('');
	}
	return str;
}

function decrypt(encryptedText, n) {
	let str = '';
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < encryptedText.length / 2; j++) {
			let middle = Math.floor(encryptedText.length / 2);

			str += encryptedText[middle + j];
			if (str.length === encryptedText.length) break;
			str += encryptedText[j];
		}
		encryptedText = str;
		str = '';
	}
	return encryptedText;
}
