// Solution: Strip Url Params
// https://www.codewars.com/kata/51646de80fd67f442c000013/javascript
function stripUrlParams(url, paramsToStrip = []) {
	if (url.split('?')[1] === undefined) return url;

	let website = url.split('?')[0];
	let params = url.split('?')[1].split('&');
	let param = '',
		arr = [];

	for (let i = 0; i < params.length; i++) {
		if (paramsToStrip.includes(params[i][0])) continue;
		else if (!param.includes(params[i][0])) param += params[i] + '&';
		else continue;
	}

	return param ? website + '?' + param.slice(0, param.length - 1) : website;
}
