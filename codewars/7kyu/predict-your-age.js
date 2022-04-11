// Solution: Predict your age
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
	return Math.floor(
		Math.sqrt(
			[age1, age2, age3, age4, age5, age6, age7, age8]
				.map((n) => n * n)
				.reduce((acc, c) => acc + c)
		) / 2
	);
}
