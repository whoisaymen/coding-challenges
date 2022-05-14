// Solution: Disarium Number (Special Numbers Series #3)
// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/javascript
function disariumNumber(n) {
	return String(n)
		.split("")
		.reduce((acc, c, i) => acc + Math.pow(c, i + 1), 0) === n
		? "Disarium !!"
		: "Not !!";
}
