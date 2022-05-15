// Solution: Indexed capitalization
// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
function capitalize(s, arr) {
	let split = s.split("");

	for (let i = 0; i < split.length; i++) {
		if (arr[i] !== undefined && split[arr[i]] !== undefined) {
			split[arr[i]] = split[arr[i]].toUpperCase();
		}
	}
	console.log(split.join(""), s, arr);
	return split.join("");
}
