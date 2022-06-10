// Solution: Numbers to Letters
// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/
function switcher(x) {
	x = x.map(Number);
	for (let i = 0; i < x.length; i++) {
		if (x[i] === 27 || x[i] === 28 || x[i] === 29) {
			continue;
		} else {
			x[i] = x[i] + 71 + (26 - x[i]) * 2;
		}
	}
	return x.map((x) => (x === 27 ? (x = '!') : x === 28 ? (x = '?') : x === 29 ? (x = ' ') : (x = String.fromCharCode(x)))).join('');
}
