// Solution: Fake binary
function fakeBin(x) {
	// x = string of digits i.e. '12345'
	// replace any digit from x below 5 with 0 i.e. '00005'
	// replace any digit from x 5 and above with 1 i.e. '00001';
	// return string
	// special cases: input will never be an empty string
	let str = "";
	for (let i = 0; i < x.length; i++) {
		if (x[i] < 5) {
			str += 0;
		} else {
			str += 1;
		}
	}
	return str;
}
