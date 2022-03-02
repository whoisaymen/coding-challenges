// Solution: RegExp validate PIN code
function validatePIN(pin) {
	if (!/^[0-9]*$/.test(pin)) {
		return false;
	}
	return pin.length === 4 || pin.length === 6;
}
