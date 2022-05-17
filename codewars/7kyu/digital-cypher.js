// Solution: Digital cypher
// https://www.codewars.com/kata/592e830e043b99888600002d
function encode(str, n) {
	let key = String(n).repeat(str.length).split("");
	return str.split("").map((x, i) => +x.charCodeAt() - 96 + Number(key[i]));
}
