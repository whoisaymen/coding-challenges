// Solution: Remove first and last character part 2
function array(arr) {
	return arr.split(",").slice(1, -1).join(" ")
		? arr.split(",").slice(1, -1).join(" ")
		: null;
}
