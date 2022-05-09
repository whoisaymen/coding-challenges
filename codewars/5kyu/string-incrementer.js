// Solution: String incrementer
function incrementString(strng) {
	let str = "";
	let num = "";
	for (let i = 0; i < strng.length; i++) {
		if (strng[i] != Number(strng[i])) {
			str += strng[i];
		} else {
			num += strng[i];
		}
	}
	let length = num.length;
	let add = Number(num) + Number(1);
	return str + add.toString(10).padStart(length, "0");
}
