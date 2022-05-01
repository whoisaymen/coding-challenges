// Solution: Folding your way to the moon
function foldTo(distance) {
	let thickness = 0.0001;
	let folds = 0;

	while (thickness < distance) {
		thickness *= 2;
		folds++;
	}

	return distance < 0 ? null : folds;
}
