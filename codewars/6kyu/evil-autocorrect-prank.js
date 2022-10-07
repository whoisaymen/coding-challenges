// Solution: Evil Autocorrect Prank
// https://www.codewars.com/kata/538ae2eb7a4ba8c99b000439/javascript
function autocorrect(input) {
	input = input.split(' ');
	for (let i = 0; i < input.length; i++) {
		if (input[i].toLowerCase() === 'u') input[i] = 'your sister';
		else if (input[i].toLowerCase().includes('you')) {
			if (input[i].toLowerCase()[3] === 'u') {
				input[i] = 'your sister';
			} else if (input[i].toLowerCase()[3] != 'u' && input[i].toLowerCase()[3] >= 'a' && input[i].toLowerCase()[3] <= 'z') {
				continue;
			} else {
				input[i] = input[i].toLowerCase().replace('you', 'your sister');
			}
		}
	}
	return input.join(' ');
}
