// Solution: Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da/
function alphabetPosition(text) {
	return text
		.toLowerCase()
		.split("")
		.filter((x) => x >= "a" && x <= "z")
		.map((x) => x.charCodeAt() - 96)
		.join(" ");
}
