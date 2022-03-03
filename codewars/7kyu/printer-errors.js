// Solution: Printer errors
function printerError(s) {
	let errors = s.split("").filter((x) => x >= "a" && x <= "m").length;
	return `${s.length - errors}/${s.length}`;
}
