// Solution: The Hashtag Generator
// https://www.codewars.com/kata/52449b062fb80683ec000024/javascript
function generateHashtag(str) {
	if (!str.trim()) return false;

	let output = str.split(' ').filter((x) => x.length > 0);
	output = '#' + output.map((x) => x[0].toUpperCase() + x.slice(1)).join('');

	return output.length > 140 ? false : output;
}
