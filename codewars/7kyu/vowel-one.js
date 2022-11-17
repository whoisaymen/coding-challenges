// Solution: Vowel one
// https://www.codewars.com/kata/580751a40b5a777a200000a1/javascript
function vowelOne(s) {
	s = s.toLowerCase();
	return s
		.split('')
		.map((x) => (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' ? '1' : '0'))
		.join('');
}
