// Solution: Help the Fruit Guy
// https://www.codewars.com/kata/557af4c6169ac832300000ba/
function removeRotten(bagOfFruits) {
	if (bagOfFruits == null) return [];
	if (bagOfFruits.length < 1) return [];
	return bagOfFruits.map((x) => {
		if (x.includes("rotten")) return x.split("rotten")[1].toLowerCase();
		else return x.toLowerCase();
	});
	// ...
}
