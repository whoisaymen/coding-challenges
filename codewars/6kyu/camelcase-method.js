// Solutions: CamelCase Method
// https://www.codewars.com/kata/587731fda577b3d1b0001196/
String.prototype.camelCase = function () {
	if (this == '') {
		return '';
	}
	return this.trim()
		.split(' ')
		.map((x) => x[0].toUpperCase() + x.slice(1))
		.join('');
};
