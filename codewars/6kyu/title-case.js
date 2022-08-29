// Solution: Title Case
// https://www.codewars.com/kata/5202ef17a402dd033c000009/javascript
function titleCase(title, minorWords) {
	if (!title) return '';
	title = title.split(' ');

	let cap = title.map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase());

	for (let i = 0; i < cap.length; i++) {
		if (minorWords) {
			for (let j = 0; j < minorWords.split(' ').length; j++) {
				if (i !== 0 && cap[i].toLowerCase() == minorWords.toLowerCase().split(' ')[j]) {
					cap[i] = minorWords.split(' ')[j].toLowerCase();
				}
			}
		}
	}

	return cap.join(' ');
}
