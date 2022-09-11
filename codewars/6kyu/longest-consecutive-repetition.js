// Solution: Character with longest consecutive repetition
// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/javascript
function longestRepetition(s) {
	let str = '',
		count = 1,
		temp = 0,
		arr = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i + 1]) {
			str = s[i];
			count++;
		} else {
			str = s[i];
			temp = count;
			arr.push([str, temp]);
			count = 1;
		}
	}
	let variable = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][1] > variable) {
			variable = arr[i][1];
			str = arr[i][0];
		}
	}

	return [str, variable];
}
