Solution: Meeting;
function meeting(s) {
	return (
		"(" +
		s
			.toUpperCase()
			.split(";")
			.map((x) => (x = x.split(":").reverse().join(", ")))
			.sort()
			.join(")(") +
		")"
	);
}
