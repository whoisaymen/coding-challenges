// Solution: Data reverse
function dataReverse(data) {
	let str = "";
	let arr = [];
	let count = 1;
	for (let i = 0; i < data.length; i++) {
		str += data[i];
		if (count % 8 == 0 && i > 1) {
			arr.push(str);
			str = "";
		}
		count++;
	}
	return arr
		.reverse()
		.join("")
		.split("")
		.map((x) => +x);
}
