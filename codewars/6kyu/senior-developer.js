// Solution: Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
// https://www.codewars.com/kata/582887f7d04efdaae3000090/javascript
function findSenior(list) {
	let arr = list.slice();
	let max = [arr.sort((a, b) => b.age - a.age)][0].map((x) => (x = x.age))[0];
	return list.filter((x) => x.age === max);
}
