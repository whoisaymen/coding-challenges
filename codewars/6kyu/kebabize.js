// Solution: Kebabize
function kebabize(str) {
	let kebab = "";
	for (let i = 0; i < str.length; i++) {
		if ((str[i] >= "0" && str[i] <= "9") || str[i] == "-") {
			continue;
		}
		if (str[i] == str[i].toUpperCase() && i > 0) {
			kebab += "-" + str[i].toLowerCase();
			continue;
		}
		kebab += str[i].toLowerCase();
	}
	return kebab[0] === "-" ? kebab.slice(1) : kebab;
}
