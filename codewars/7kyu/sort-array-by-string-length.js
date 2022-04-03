// Solution: Sort array by string length
function sortByLength(array) {
	return array.sort(function (a, b) {
		const lengthA = a.length; // ignore upper and lowercase
		const lengthB = b.length;
		if (lengthA < lengthB) {
			return -1;
		}
		if (lengthA > lengthB) {
			return 1;
		}
		return 0;
	});
}
