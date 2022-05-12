// Solution: Don't give me five!
function dontGiveMeFive(start, end) {
	let count = 0;

	for (let i = start; i <= end; i++) {
		if (String(i).includes("5")) {
			continue;
		} else {
			count++;
		}
	}

	return count;
}
