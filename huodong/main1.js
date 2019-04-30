function getFrame(_frame){
	var frame = _frame.contents().find("iframe");
	//console.log(frame.length);
	if(frame.length > 0){
		return getFrame(frame);
	}
	return  _frame.contents();
}
function cccc(){
	var frame = getFrame($("iframe"));
	var promotionPrices = frame.find("input[name='promotionPrice']");
	alert("cccc-->"+promotionPrices.length);
	promotionPrices.each(function(i){
		var obj = $(this);
		var price = obj.parents("tr").find(".J_ItemPrice").text().trim();
		var priceInt = parseInt(price);
		obj.focus().val(priceInt/2).blur();
	});
}
function initi() {
	window.setTimeout("initi()", 1000);
	var frame = getFrame($("iframe"));
	var btn = frame.find(".m11-setprice-btns");
	if(frame.find("#zejiangxiao").length > 0) return;
	var input = document.createElement("input");
	input.type="button";
	input.value = "sycn";
	input.id = "zejiangxiao";
	input.onclick = cccc;
	btn.append(input);
}
window.setTimeout("initi()", 1000);
