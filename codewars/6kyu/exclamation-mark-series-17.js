// Solution: Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?
// https://www.codewars.com/kata/57fb44a12b53146fe1000136/
let scores = {
	"!": 2,
	"?": 3,
};

function balance(left, right) {
	left = left
		.split("")
		.map((x) => scores[x])
		.reduce((acc, c) => acc + c);
	right = right
		.split("")
		.map((x) => scores[x])
		.reduce((acc, c) => acc + c);
	return left === right ? "Balance" : left > right ? "Left" : "Right";
}
