// Solution: Coding Meetup #2 - Higher-Order Functions Series - Greet developers
// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/javascript
function greetDevelopers(list) {
	for (let i = 0; i < list.length; i++) {
		list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`;
	}
	return list;
}
