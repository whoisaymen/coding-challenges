// Solution: Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
// https://www.codewars.com/kata/5827acd5f524dd029d0005a4/javascript
function isRubyComing(list) {
	let count = 0;
	list.forEach((x) => {
		if (x.language === 'Ruby') count++;
	});

	return count > 0 ? true : false;
}
