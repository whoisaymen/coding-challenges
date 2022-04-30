// Solution: Build a square
function generateShape(integer) {
	let str = "";
	for (let i = 0; i < integer; i++) {
		str += "+".repeat(integer);
		if (i !== integer - 1) {
			str += "\n";
		}
	}
	return str;
}
