// Catalog
// https://www.codewars.com/kata/59d9d8cb27ee005972000045/javascript
function catalog(s, article) {
	let line = s.split('\n').filter((x) => x.includes(article)),
		arrI = [],
		arrP = [],
		arrQ = [],
		str = '';

	if (line.length < 1) return 'Nothing';

	for (let i = 0; i < line.length; i++) {
		arrI.push(line[i].split('<name>')[1].split('</name>')[0]);
		arrP.push(line[i].split('<prx>')[1].split('</prx>')[0]);
		arrQ.push(line[i].split('<qty>')[1].split('</qty>')[0]);
		if (i !== line.length - 1) {
			str += `${arrI[i]} > prx: $${arrP[i]} qty: ${arrQ[i]}\r\n`;
		} else {
			str += `${arrI[i]} > prx: $${arrP[i]} qty: ${arrQ[i]}`;
		}
	}

	return str;
}
