// Solution: Can this object fly? Balloons in "Up" and in real life
// https://www.codewars.com/kata/59ea2a532a7accf2510000ce/
function Journey(object, crew, balloons) {
	this.object = object;
	this.crew = crew;
	this.balloons = balloons;

	this.isPossible = function () {
		return this.balloons * 0.0048 > this.object.weight + this.crew * 80 ? true : false;
	};
}
