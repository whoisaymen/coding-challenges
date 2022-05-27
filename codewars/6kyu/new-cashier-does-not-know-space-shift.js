// Solution: New Cashier Does Not Know About Space or Shift
// https://www.codewars.com/kata/5d23d89906f92a00267bb83d/
function getOrder(input) {
	let str = "";
	let freq = 0;
	if (input.includes("burger")) {
		freq = input.split("burger").length - 1;
		str += "Burger ".repeat(freq);
	}

	if (input.includes("fries")) {
		freq = input.split("fries").length - 1;
		str += "Fries ".repeat(freq);
	}

	if (input.includes("chicken")) {
		freq = input.split("chicken").length - 1;
		str += "Chicken ".repeat(freq);
	}

	if (input.includes("pizza")) {
		freq = input.split("pizza").length - 1;
		str += "Pizza ".repeat(freq);
	}

	if (input.includes("sandwich")) {
		freq = input.split("sandwich").length - 1;
		str += "Sandwich ".repeat(freq);
	}
	if (input.includes("onionrings")) {
		freq = input.split("onionrings").length - 1;
		str += "Onionrings ".repeat(freq);
	}

	if (input.includes("milkshake")) {
		freq = input.split("milkshake").length - 1;
		str += "Milkshake ".repeat(freq);
	}

	if (input.includes("coke")) {
		freq = input.split("coke").length - 1;
		str += "Coke ".repeat(freq);
	}

	return str.trim();
}
