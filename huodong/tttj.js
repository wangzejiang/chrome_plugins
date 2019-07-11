function initTTTJ(){
	$.getScript("1.js",function(){initGTTTJ()});
	window.setTimeout("initTTTJ()", 1000);
	console.log(1);
}
window.setTimeout("initTTTJ()", 1000);