// Solution: Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
// https://www.codewars.com/kata/58291fea7ff3f640980000f9/javascript
function allContinents(list) {
	let developersContinents = [];

	for (item of list) {
		developersContinents.push(item.continent);
	}

	let continentsRepresented = [...new Set(developersContinents)];

	return continentsRepresented.length === 5;
}
