// Solution: Simple string characters
// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/
function solve(s) {
	let uppercase = 0;
	let lowercase = 0;
	let number = 0;
	let special = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] >= "0" && s[i] <= "9") number++;
		else if (s[i] >= "!" && s[i] <= "@") special++;
		else if (s[i].toUpperCase() === s[i]) uppercase++;
		else lowercase++;
	}
	return [uppercase, lowercase, number, special];
}
