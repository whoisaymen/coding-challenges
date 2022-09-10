// Sum consecutives
// https://www.codewars.com/kata/55eeddff3f64c954c2000059/javascript
function sumConsecutives(s) {
	let arr = [];
	let sum = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] == s[i + 1]) {
			sum += s[i];
		} else {
			arr.push(sum + s[i]);
			sum = 0;
		}
	}

	return arr;
}
