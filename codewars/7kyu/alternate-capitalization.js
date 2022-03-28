// Solution: Alternate capitalization
function capitalize(s) {
	let even = "";
	let odd = "";

	for (let i = 0; i < s.length; i++) {
		if (i % 2 == 0) {
			even += s[i].toUpperCase();
			odd += s[i].toLowerCase();
		} else {
			even += s[i].toLowerCase();
			odd += s[i].toUpperCase();
		}
	}
	return [even, odd];
}
