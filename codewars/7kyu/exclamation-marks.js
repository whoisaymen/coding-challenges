// Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
// https://www.codewars.com/kata/57fb142297e0860073000064/
function product(string) {
	return (
		string.split("").filter((x) => x === "!").length *
		string.split("").filter((x) => x === "?").length
	);
}
