// Solution: Char Code Calculation
// https://www.codewars.com/kata/57f75cc397d62fc93d000059/
function calc(x) {
	let total1 = x
		.split("")
		.map((x) => String(x.charCodeAt()))
		.reduce((acc, c) => acc + c);
	let total2 = total1
		.split("")
		.map((x) => {
			if (x === "7") {
				return 1;
			} else {
				return x;
			}
		})
		.join("");
	return (
		total1.split("").reduce((acc, c) => +acc + +c) -
		total2.split("").reduce((acc, c) => +acc + +c)
	);
}
