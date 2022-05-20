// Solution: Barking mad
// https://www.codewars.com/kata/54dba07f03e88a4cec000caf/javascript

function Dog(breed) {
	this.breed = breed;
	this.bark = function () {
		return "Woof";
	};
}

var snoopy = new Dog("Beagle");

snoopy.bark = function () {
	return "Woof";
};

var scoobydoo = new Dog("Great Dane");
