// Solution: Valid Phone Number
// https://www.codewars.com/kata/525f47c79f2f25a4db000025/solutions/javascript
function validPhoneNumber(phoneNumber) {
	console.log(phoneNumber);
	return phoneNumber[0] == '(' && phoneNumber[4] == ')' && phoneNumber[5] == ' ' && phoneNumber[9] == '-' && phoneNumber.length === 14;
}
