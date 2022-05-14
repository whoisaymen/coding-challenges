// Solution: Automorphic Number (Special Numbers Series #6)
// https://www.codewars.com/kata/5a58d889880385c2f40000aa/javascript

function automorphic(n) {
	return String(n ** 2).endsWith(n) ? "Automorphic" : "Not!!";
}
