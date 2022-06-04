// Solution: Regex Password Validation
// https://www.codewars.com/kata/52e1476c8147a7547a000811
function validate(password) {
	return /^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,})$/.test(password);
}
