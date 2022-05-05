// Solution: Alphabet war
function alphabetWar(fight) {
	let left = fight
		.split("")
		.filter((x) => x == "w" || x == "p" || x == "b" || x == "s")
		.map((x) => (x = scores[x]))
		.reduce((acc, c) => acc + c, 0);
	let right = fight
		.split("")
		.filter((x) => x == "m" || x == "q" || x == "d" || x == "z")
		.map((x) => (x = scores[x]))
		.reduce((acc, c) => acc + c, 0);

	return right > left
		? "Right side wins!"
		: left > right
		? "Left side wins!"
		: "Let's fight again!";
}

let scores = {
	w: 4,
	p: 3,
	b: 2,
	s: 1,
	m: 4,
	q: 3,
	d: 2,
	z: 1,
};
