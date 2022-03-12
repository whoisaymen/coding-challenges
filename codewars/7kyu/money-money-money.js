// Solution: Money, Money, Money
function calculateYears(principal, interest, tax, desired) {
	let n = 0;
	let acc = 0;
	if (principal === desired) {
		return 0;
	}
	for (let i = 0; acc < desired; i++) {
		acc = principal * interest - principal * interest * tax + principal;
		principal = acc;
		n++;
	}
	return n;
}
