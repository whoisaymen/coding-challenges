// Solution: Write Number in Expanded Form
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/
function expandedForm(num) {
	let str = String(num);
	let expanded = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== "0")
			expanded += str[i] + "0".repeat(str.length - i - 1) + " + ";
	}
	return expanded.slice(0, -3);
}
