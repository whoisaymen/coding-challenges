// Solution: Build a pile of Cubes
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/javascript
function findNb(m) {
	let n = 1;
	let final = 0;
	while (final < m) {
		final += Math.pow(n, 3);
		n++;
	}
	return final === m ? n - 1 : -1;
}
