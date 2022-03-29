// Solution: Palindrome chain length
var palindromeChainLength = function (n) {
	let steps = 0;
	let reversed = 0;
	while (String(n) !== reversed) {
		n = n + Number(reversed);
		reversed = String(n).split("").reverse().join("");
		steps++;
	}
	return steps - 1;
};
