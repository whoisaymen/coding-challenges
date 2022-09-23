// Solution: Autocomplete! Yay!
// https://www.codewars.com/kata/5389864ec72ce03383000484/javascript
function autocomplete(input, dictionary) {
	input = input
		.split('')
		.map((x) => x.toLowerCase())
		.filter((x) => x >= 'a' && x <= 'z')
		.join('');

	let arr = [];

	for (let i = 0; i < dictionary.length; i++) {
		if (dictionary[i].toLowerCase().startsWith(input.toLowerCase())) {
			if (arr.length < 5) {
				arr.push(dictionary[i]);
			} else {
				break;
			}
		}
	}

	return arr;
}
