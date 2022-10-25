// Solution: Simple Substitution Cipher Helper
// https://www.codewars.com/kata/52eb114b2d55f0e69800078d/javascript
function SubstitutionCipher(abc1, abc2) {
	this.encode = function (str) {
		let pos = str.split('').map((x) => abc1.indexOf(x));
		return pos.map((x, i) => (x === -1 ? str[i] : abc2[x])).join('');
	};
	this.decode = function (str) {
		let pos = str.split('').map((x) => abc2.indexOf(x));
		return pos.map((x, i) => (x === -1 ? str[i] : abc1[x])).join('');
	};
}
