// ASCII Fun #2: Funny Dots
// https://www.codewars.com/kata/59098c39d8d24d12b6000020/javascript
function dot(n, m) {
	let str = '';

	for (let i = 0; i < m; i++) {
		str += '+---'.repeat(n);
		str += '+\n';
		str += '| o '.repeat(n);
		str += '|\n';
		if (i === m - 1) {
			str += '+---'.repeat(n);
		}
	}

	str += '+';

	return str;
}
