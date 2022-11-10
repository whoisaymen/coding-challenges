// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
// https://www.codewars.com/kata/5828713ed04efde70e000346/javascript
function countLanguages(list) {
	let languages = {};

	list.forEach((x) => {
		if (languages[x.language]) {
			languages[x.language]++;
		} else {
			languages[x.language] = 1;
		}
	});

	return languages;
}
