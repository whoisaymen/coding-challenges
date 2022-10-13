// Solution: Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
// https://www.codewars.com/kata/583a8bde28019d615a000035/javascript
function findOddNames(list) {
	let arr = [];
	for (item of list) {
		if (
			item['firstName']
				.split('')
				.map((x) => x.charCodeAt())
				.reduce((acc, c) => acc + c, 0) %
				2 !==
			0
		) {
			arr.push(item);
		}
	}
	return arr;
}
