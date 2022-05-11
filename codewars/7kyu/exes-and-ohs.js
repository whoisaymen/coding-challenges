// Solution: Exes and Ohs
function XO(str) {
	let xs = str
		.toLowerCase()
		.split("")
		.filter((x) => x == "x").length;
	let os = str
		.toLowerCase()
		.split("")
		.filter((x) => x == "o").length;
	return xs === os || (xs === 0 && os === 0);
}
