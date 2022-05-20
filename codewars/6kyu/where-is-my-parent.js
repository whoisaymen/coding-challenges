// Solution: Where is my parent!?(cry)
// https://www.codewars.com/kata/58539230879867a8cd00011c/
function findChildren(dancingBrigade) {
	let sortedLowerCase = dancingBrigade.toLowerCase().split("").sort();
	for (let i = 0; i < sortedLowerCase.length; i++) {
		if (i == 0) sortedLowerCase[i] = sortedLowerCase[i].toUpperCase();
		else if (sortedLowerCase[i - 1].toLowerCase() == sortedLowerCase[i])
			continue;
		else sortedLowerCase[i] = sortedLowerCase[i].toUpperCase();
	}
	return sortedLowerCase.join("");
}
