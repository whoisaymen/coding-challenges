// Solution: Find the lucky numbers
// https://www.codewars.com/kata/580435ab150cca22650001fb/
function filterLucky(x) {
	return x.filter((x) => String(x).includes("7"));
}
