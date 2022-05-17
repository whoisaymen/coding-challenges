// Solution: If you can read this...
// https://www.codewars.com/kata/586538146b56991861000293/
function to_nato(words) {
	let arr = words.toLowerCase().split("");
	let str = "";
	for (let i = 0; i < arr.length; i++) {
		let x = arr[i];
		if (x < "a" || x > "z") {
			if (x === " ") {
				continue;
			} else {
				str += arr[i] + " ";
			}
		} else {
			str += arr[i].toUpperCase() + NATO[x].slice(1) + " ";
		}
	}
	return str.trim();
}
