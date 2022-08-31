// Solution: WeIrD StRiNg CaSe
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/javascript

function toWeirdCase(string) {
	string = string.split(' ');
	let arr = [];
	let str = '';

	for (let i = 0; i < string.length; i++) {
		for (let j = 0; j < string[i].length; j++) {
			if (j % 2 === 0) {
				str += string[i][j].toUpperCase();
			} else {
				str += string[i][j].toLowerCase();
			}
		}
		if (i !== string.length - 1) {
			str += ' ';
		}
	}
	arr.push(str);
	return arr.join('');
}
