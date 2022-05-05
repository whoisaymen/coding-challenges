// Solution: Detect Pangram
function isPangram(string) {
	let letters = "abcdefghijklmnopqrstuvwxyz";
	for (let i = 0; i < letters.length; i++) {
		if (!string.toLowerCase().includes(letters[i])) {
			return false;
		}
	}
	return true;
}
