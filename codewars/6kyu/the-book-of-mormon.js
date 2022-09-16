// Solution: The Book of Mormon
// https://www.codewars.com/kata/58373ba351e3b615de0001c3/javascript
function Mormons(startingNumber, reach, target) {
	let count = 0;

	while (startingNumber < target) {
		startingNumber += reach * startingNumber;
		count++;
	}

	return count;
}
