// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/javascript
function flyBy(lamps, drone) {
	lamps = lamps.split('');
	for (let i = 0; i < lamps.length; i++) {
		if (drone[i]) {
			lamps[i] = 'o';
		}
	}
	return lamps.join('');
}
