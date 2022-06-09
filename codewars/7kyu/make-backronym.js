// Solution: makeBackronym
// https://www.codewars.com/kata/55805ab490c73741b7000064/
//preload variable: dict

var makeBackronym = function (string) {
	return string
		.split("")
		.map((x) => (x = dict[x.toUpperCase()]))
		.join(" ");
};
