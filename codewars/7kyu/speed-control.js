// Solution: Speed Control
// https://www.codewars.com/kata/56484848ba95170a8000004d/
function gps(s, x) {
	if (x.length <= 1) {
		return 0;
	}
	let arr = [];
	for (let i = 0; i < x.length - 1; i++) {
		arr.push(((x[i + 1] - x[i]) * 3600) / s);
	}
	return Math.floor(Math.max(...arr));
}
