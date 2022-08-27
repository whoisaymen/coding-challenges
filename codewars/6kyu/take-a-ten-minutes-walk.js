// Solution: Take a Ten Minutes Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228/javascript
function isValidWalk(walk) {
	if (
		walk.length === 10 &&
		walk.filter((x) => x === 'e').length === walk.filter((x) => x === 'w').length &&
		walk.filter((x) => x === 'n').length == walk.filter((x) => x === 's').length
	) {
		return true;
	} else {
		return false;
	}
}
