// Solution: Total amount of points
function points(games) {
	let sum = 0;

	games.forEach((x) => {
		if (x[0] > x[2]) {
			sum += 3;
		} else if (x[0] < x[2]) {
			sum += 0;
		} else {
			sum += 1;
		}
	});

	return sum;
}
