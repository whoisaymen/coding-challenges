// Solution: Backspaces in string
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/javascript
function cleanString(s) {
	s = s.split('');

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '#') {
			s[i] = '_';
			s[i - 1] = '_';
			s = s.filter((x) => x !== '_');
			i = 0;
		}
	}

	return s[0] === '#' ? s.join('').slice(1) : s.join('');
}
