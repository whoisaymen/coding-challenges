// Solution: Switcheroo
function switcheroo(x) {
	return x
		.split("")
		.map((x) => {
			if (x === "a") {
				return (x = "b");
			} else if (x === "b") {
				return (x = "a");
			} else {
				return (x = "c");
			}
		})
		.join("");
}
