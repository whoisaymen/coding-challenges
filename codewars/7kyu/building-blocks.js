// Solution: Building blocks
// https://www.codewars.com/kata/55b75fcf67e558d3750000a3/
class Block {
	constructor(data) {
		this.width = data[0];
		this.length = data[1];
		this.height = data[2];
	}

	getWidth() {
		return this.width;
	}

	getLength() {
		return this.length;
	}

	getHeight() {
		return this.height;
	}

	getVolume() {
		return this.width * this.length * this.height;
	}

	getSurfaceArea() {
		return 2 * this.length * this.width + 2 * this.length * this.height + 2 * this.height * this.width;
	}
}
