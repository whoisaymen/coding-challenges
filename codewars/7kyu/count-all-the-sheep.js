// Solution: Count all the sheep on farm in the heights of New Zealand
// https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010/
function lostSheep(friday, saturday, total) {
	return (
		total -
		friday.reduce((acc, c) => acc + c, 0) -
		saturday.reduce((acc, c) => acc + c, 0)
	);
	//your code here
}
