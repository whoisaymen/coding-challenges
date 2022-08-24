// Solution: Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript
function order(words) {
	let arr = [];
	words = words.split(' ');

	for (let j = 1; j < 10; j++) {
		for (let i = 0; i < words.length; i++) {
			if (words[i].includes(j)) {
				arr.push(words[i]);
			}
		}
	}
	return arr.join(' ');
}
