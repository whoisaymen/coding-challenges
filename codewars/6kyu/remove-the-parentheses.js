// Solution: Remove the parentheses
// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/javascript
function removeParentheses(s) {
	console.log(s);
	let count = 0,
		str = '';

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			count++;
		}

		if (s[i] === ')') {
			count--;
		}

		if (count > 0) {
			continue;
		} else {
			str += s[i];
		}
	}
	return str.replace(/["'()]/g, '');
}
