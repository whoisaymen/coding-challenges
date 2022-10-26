// Solution: Adding ordinal indicator suffixes to numbers
// https://www.codewars.com/kata/52dca71390c32d8fb900002b/javascript
function numberToOrdinal(n) {
	if (n === 0) return String(n);
	if (String(n).endsWith('11')) return n + 'th';
	if (String(n).endsWith('12')) return n + 'th';
	if (String(n).endsWith('13')) return n + 'th';

	if (n % 10 === 1) return n + 'st';
	else if (n % 10 === 2) return n + 'nd';
	else if (n % 10 === 3) return n + 'rd';
	else return n + 'th';

	return String(n);
}
