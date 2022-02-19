// Solution: Mumbling
function accum(s) {
	return s
		.split("")
		.map(
			(letter, index) =>
				`${letter[0].toUpperCase()}${letter.toLowerCase().repeat(index)}`
		)
		.join("-");
}
