// Solution: Growth of a Population
function nbYear(p0, percent, aug, p) {
	let count = 0;
	let nYear = Math.floor(p0 + p0 * (percent / 100) + aug);
	if (nYear > p) {
		return 1;
	}

	while (nYear < p) {
		nYear = Math.floor(p0 + p0 * (percent / 100) + aug);
		p0 = nYear;
		count++;
	}

	return count;
}
