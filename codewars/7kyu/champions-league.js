// Solution: Find how many times did a team from a given country win the Champions League?
// https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9/javascript
function countWins(winnerList, country) {
	let obj = {};
	winnerList.forEach((x) => {
		if (obj[x.country]) {
			obj[x.country]++;
		} else {
			obj[x.country] = 1;
		}
	});

	return obj[country] ? obj[country] : 0;
}
