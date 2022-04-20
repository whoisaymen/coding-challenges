// Solution: Extract the domain name from a URL
function domainName(url) {
	return url
		.split(".")
		.join(" ")
		.split("http://")
		.join(" ")
		.split("www")
		.join(" ")
		.trim()
		.split("https://")
		.join("")
		.split(" ")
		.filter((n) => n.length > 0)[0];
}
