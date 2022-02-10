// Solution: Safen User Input Part I - htmlspecialchars
function htmlspecialchars(formData) {
	return formData
		.split("&")
		.join("&amp;")
		.split("<")
		.join("&lt;")
		.split(">")
		.join("&gt;")
		.split('"')
		.join("&quot;");
}
