// Solution: Validate Credit Card Number
// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/
function validate(n) {
	n = String(n).split('').map(Number);
	if (n.length % 2 === 0) n = n.map((x, i) => (i % 2 == 0 ? x * 2 : x));
	else n = n.map((x, i) => (i % 2 != 0 ? x * 2 : x));
	n = n.map((x) =>
		x > 9
			? String(x)
					.split('')
					.reduce((acc, c) => +acc + +c, 0)
			: x
	);
	return n.reduce((acc, c) => +acc + +c, 0) % 10 === 0;
}
