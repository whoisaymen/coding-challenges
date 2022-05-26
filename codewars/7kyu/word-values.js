// Solution: Word values
// https://www.codewars.com/kata/598d91785d4ce3ec4f000018/
function wordValue(a) {
	return a.map(
		(x, i) =>
			x
				.split("")
				.map((y) => (y === " " ? 0 : y.charCodeAt() - 96))
				.reduce((acc, c) => acc + c, 0) *
			(i + 1)
	);
}
