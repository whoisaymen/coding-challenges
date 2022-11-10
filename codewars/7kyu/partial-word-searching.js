// Solution: Partial Word Searching
// https://www.codewars.com/kata/54b81566cd7f51408300022d/javascript
function wordSearch(query, seq) {
	let result = seq.filter((x) => x.toLowerCase().includes(query.toLowerCase()));
	return result.length > 0 ? result : ['Empty'];
}
