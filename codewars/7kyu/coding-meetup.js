// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
// https://www.codewars.com/kata/5827bc50f524dd029d0005f2/javascript
function getFirstPython(list) {
	let python = list.filter((x) => x.language == 'Python')[0];
	return python ? `${python.firstName}, ${python.country}` : `There will be no Python developers`;
}
