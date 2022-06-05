// Solution: Help the bookseller !
// https://www.codewars.com/kata/54dc6f5a224c26032800005c/

function stockList(listOfArt, listOfCat) {
	let str = "";
	for (let i = 0; i < listOfCat.length; i++) {
		let count = listOfArt
			.filter((x) => x.startsWith(listOfCat[i]))
			.map((x) => +x.split(" ")[1])
			.reduce((acc, c) => acc + c, 0);
		str += "(" + listOfCat[i] + " : " + count + ")";
	}
	return listOfArt.length > 0 ? str.split(")(").join(") - (") : "";
}
