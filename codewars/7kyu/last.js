// Last
// https://www.codewars.com/kata/541629460b198da04e000bb9/javascript
function last(list) {
	if (arguments.length === 1) {
		return list[list.length - 1] || arguments[arguments.length - 1];
	} else {
		return arguments[arguments.length - 1];
	}
}
