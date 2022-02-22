// Solution: Complementary DNA
function DNAStrand(dna) {
	let arr = dna.split("");
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "A") {
			arr[i] = "T";
		} else if (arr[i] === "T") {
			arr[i] = "A";
		} else if (arr[i] === "G") {
			arr[i] = "C";
		} else if (arr[i] === "C") {
			arr[i] = "G";
		}
	}
	return arr.join("");
}
