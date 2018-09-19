function initOptions() {
	var bgPage = chrome.extension.getBackgroundPage();
	document.getElementById("close").addEventListener("click", function() {
		bgPage.closeed();
	});
	document.getElementById("open").addEventListener("click", function() {
		bgPage.opened();
	});
}
addEventListener("load", initOptions, false);