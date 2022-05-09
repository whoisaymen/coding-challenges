// Solution: Persistent bugger
function persistence(num) {
	let str = num;
	let count = 0;

	while (str.toString(10).length != 1) {
		str = String(num)
			.split("")
			.reduce((acc, c) => +acc * +c, 1);
		num = str;
		count++;
	}

	return count;
}
