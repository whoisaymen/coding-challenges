// Solution: Give me a Diamond
// https://www.codewars.com/kata/5503013e34137eeeaa001648/javascript
function diamond(n) {
	if (n % 2 === 0 || n < 0) return null;
	let str = '';
	let start = Math.floor(n / 2);
	let star = 1;
	let middle = false;

	for (let i = 0; i < n; i++) {
		str += ' '.repeat(start);
		str += '*'.repeat(star);
		str += '\n';
		if (star === n) {
			middle = true;
		}
		if (middle) {
			star -= 2;
			start++;
		} else {
			star += 2;
			start--;
		}
	}

	return str;
}
