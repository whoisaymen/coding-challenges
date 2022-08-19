// Solution: Bouncing Balls
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/javascript

function bouncingBall(h, bounce, window) {
	if (bounce >= 1 || bounce <= -1 || window > h || h <= 0) return -1;
	let counter = 0;
	while (h > window) {
		counter++;
		h *= bounce;
	}
	return counter * 2 - 1;
}
