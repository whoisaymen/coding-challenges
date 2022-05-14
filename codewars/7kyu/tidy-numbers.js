// Solution: Tidy Number (Special Numbers Series #9)
// https://www.codewars.com/kata/5a87449ab1710171300000fd/javascript

function tidyNumber(n) {
	let str = String(n);
	for (let i = 0; i < str.length - 1; i++) {
		if (str[i + 1] >= Number(str[i])) {
			continue;
		} else {
			return false;
		}
	}
	return true;
}
