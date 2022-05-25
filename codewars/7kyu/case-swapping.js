// Solution: Case Swapping
// https://www.codewars.com/kata/5590961e6620c0825000008f
function swap(str) {
	return str
		.split("")
		.map((x) => (x.toLowerCase() === x ? x.toUpperCase() : x.toLowerCase()))
		.join("");
}
