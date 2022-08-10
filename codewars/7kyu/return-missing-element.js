// Return the Missing Element
// https://www.codewars.com/kata/5299413901337c637e000004/javascript
function getMissingElement(superImportantArray) {
	for (let i = 0; i <= 9; i++) {
		if (!superImportantArray.includes(i)) {
			return i;
		}
	}
}
