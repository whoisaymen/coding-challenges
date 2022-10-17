// Solution: Loose Change
// https://www.codewars.com/kata/5571f712ddf00b54420000ee/javascript
function looseChange(cents) {
	let change = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };

	cents = Math.floor(cents);

	while (cents > 0) {
		if (cents >= 25) {
			change['Quarters']++;
			cents -= 25;
		} else if (cents >= 10) {
			change['Dimes']++;
			cents -= 10;
		} else if (cents >= 5) {
			change['Nickels']++;
			cents -= 5;
		} else if (cents >= 1) {
			change['Pennies']++;
			cents--;
		}
	}

	return change;
}
