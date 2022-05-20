// Solution: The Vowel Code
// https://www.codewars.com/kata/53697be005f803751e0015aa/
function encode(string) {
	let arr = string.split("");
	for (let i = 0; i < arr.length; i++) {
		if (string[i] === "a") arr[i] = 1;
		else if (arr[i] === "e") arr[i] = 2;
		else if (arr[i] === "i") arr[i] = 3;
		else if (arr[i] === "o") arr[i] = 4;
		else if (arr[i] === "u") arr[i] = 5;
	}
	return arr.join("");
}

function decode(string) {
	let arr = string.split("");
	for (let i = 0; i < arr.length; i++) {
		if (string[i] === "1") arr[i] = "a";
		else if (arr[i] === "2") arr[i] = "e";
		else if (arr[i] === "3") arr[i] = "i";
		else if (arr[i] === "4") arr[i] = "o";
		else if (arr[i] === "5") arr[i] = "u";
	}
	return arr.join("");
}
