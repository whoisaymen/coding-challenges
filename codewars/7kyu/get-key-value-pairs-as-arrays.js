// Solution: Get key/value pairs as arrays
function keysAndValues(data) {
	let arrProps = [];
	let arrVals = [];
	for (let prop in data) {
		arrProps.push(prop);
		arrVals.push(data[prop]);
	}
	return [arrProps, arrVals];
}
