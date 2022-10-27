// Solution: Roman Numerals Encoder
// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/javascript
function solution(number) {
	let str = '';

	while (number > 0) {
		if (number >= 1000) {
			str += 'M';
			number -= 1000;
		} else if (number >= 900) {
			str += 'CM';
			number -= 900;
		} else if (number >= 800) {
			str += 'DCCC';
			number -= 800;
		} else if (number >= 700) {
			str += 'DCC';
			number -= 700;
		} else if (number >= 500) {
			str += 'D';
			number -= 500;
		} else if (number >= 400) {
			str += 'CD';
			number -= 400;
		} else if (number >= 100) {
			str += 'C';
			number -= 100;
		} else if (number >= 90) {
			str += 'XC';
			number -= 90;
		} else if (number >= 80) {
			str += 'LXXX';
			number -= 80;
		} else if (number >= 70) {
			str += 'LXX';
			number -= 70;
		} else if (number >= 50) {
			str += 'L';
			number -= 50;
		} else if (number >= 40) {
			str += 'XL';
			number -= 40;
		} else if (number >= 10) {
			str += 'X';
			number -= 10;
		} else if (number >= 9) {
			str += 'IX';
			number -= 9;
		} else if (number >= 8) {
			str += 'VIII';
			number -= 8;
		} else if (number >= 7) {
			str += 'VII';
			number -= 7;
		} else if (number >= 5) {
			str += 'V';
			number -= 5;
		} else if (number >= 4) {
			str += 'IV';
			number -= 4;
		} else if (number >= 1) {
			str += 'I';
			number--;
		}
	}

	return str;
}
