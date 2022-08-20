// Decode the Morse code
// https://www.codewars.com/kata/54b724efac3d5402db00065e/javascript
decodeMorse = function (morseCode) {
	let code = morseCode.split('   ');
	let arr = [];
	let word = '';
	for (let i = 0; i < code.length; i++) {
		word = code[i].split(' ');
		console.log(word);
		for (let j = 0; j < word.length; j++) {
			arr.push(MORSE_CODE[word[j]]);
		}
		arr.push(' ');
	}
	return arr.join('').trim();
};
