function change(string) {
	string = string.split('');
	const arr = Array(26).fill(0);

	string.forEach((x, i) => {
		if (x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z') {
			arr[x.toLowerCase().charCodeAt() - 97] = '1';
		}
	});

	return arr.join('');
}
