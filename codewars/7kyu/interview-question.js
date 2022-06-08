// Solution: Interview Question (easy)
// https://www.codewars.com/kata/5b358a1e228d316283001892/javascript
function getStrings(city) {
	city = city.toLowerCase();
	let str = "";
	for (let i = 0; i < city.length; i++) {
		if (city[i] >= "a" && city[i] <= "z" && !str.includes(city[i])) {
			let freq = city.split("").filter((x) => x === city[i]).length;
			str += city[i] + ":" + "*".repeat(freq) + ",";
		}
	}
	return str.slice(0, -1);
}
