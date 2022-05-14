// Solution: Polish alphabet
// https://www.codewars.com/kata/57ab2d6072292dbf7c000039/
function correctPolishLetters(string) {
	let arr = string.split("");
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == "ą") arr[i] = "a";
		if (arr[i] == "ć") arr[i] = "c";
		if (arr[i] == "ę") arr[i] = "e";
		if (arr[i] == "ł") arr[i] = "l";
		if (arr[i] == "ń") arr[i] = "n";
		if (arr[i] == "ó") arr[i] = "o";
		if (arr[i] == "ś") arr[i] = "s";
		if (arr[i] == "ź") arr[i] = "z";
		if (arr[i] == "ż") arr[i] = "z";
	}
	return arr.join("");
}
