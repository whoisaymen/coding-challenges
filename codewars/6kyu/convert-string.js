//Solution: Convert string to camel case
//https://www.codewars.com/kata/517abf86da9663f1d2000003/
function toCamelCase(str) {
	if (str.length < 1) return '';
	str = str.replace(/[-_]/gi, ' ').split(' ');
	if (str[0][0].toUpperCase() === str[0][0]) return str.map((x) => x[0].toUpperCase() + x.slice(1)).join('');
	else
		return (
			str[0] +
			str
				.slice(1)
				.map((x) => x[0].toUpperCase() + x.slice(1))
				.join('')
		);
}
