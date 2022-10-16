// Filter Coffee
// https://www.codewars.com/kata/56069d0c4af7f633910000d3/javascript
function search(budget, prices) {
	return prices
		.filter((x) => x <= budget)
		.sort((a, b) => a - b)
		.join(',');
}
