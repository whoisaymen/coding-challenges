// Regexp Basics - is it a letter?
// https://www.codewars.com/kata/567de72e8b3621b3c300000b/javascript
String.prototype.isLetter = function () {
	return /^[a-zA-Z]$/g.test(this);
};
