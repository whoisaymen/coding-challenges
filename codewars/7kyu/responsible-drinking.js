// Solution: Responsible Drinking
// https://www.codewars.com/kata/5aee86c5783bb432cd000018/
function hydrate(s) {
	let numOfDrinks = s
		.replace(/[^0-9]/g, "")
		.split("")
		.reduce((acc, c) => acc + +c, 0);
	return numOfDrinks > 1
		? numOfDrinks + " glasses of water"
		: numOfDrinks + " glass of water";
}
