// First non-repeating character
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/javascript
function firstNonRepeatingLetter(s) {
	if (!s) return '';

	let arr = [];

	for (let i = 0; i < s.length; i++) {
		let freq = s.split('').filter((x) => x.toLowerCase() === s[i].toLowerCase()).length;
		arr.push(freq);
		if (freq === 1) return s[i];
	}

	if (new Set(arr).size === 1) return '';
}
