// Solution: Form the minimum
function minValue(values) {
	let arr = [...new Set(values)].sort((a, b) => a - b).join("");
	return Number(arr);
}
