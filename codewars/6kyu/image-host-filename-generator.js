// Image host filename generator
// https://www.codewars.com/kata/586a933fc66d187b6e00031a/javascript

function generateName() {
	let result = '',
		characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
		charactersLength = characters.length;

	for (let i = 0; i < 6; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}
