// Remove consecutive duplicate words
// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/javascript
const removeConsecutiveDuplicates = (s) => {
	s = s.split(' ');

	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i + 1]) {
			s.splice(i + 1, 1);
			i--;
		}
	}

	return s.join(' ');
};
