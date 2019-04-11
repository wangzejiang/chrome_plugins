function cccc(){
	var frame = $("#iFrameResizer0").contents().find("#act-frame");
	var promotionPrices = frame.contents().find("input[name='promotionPrice']");
	promotionPrices.each(function(i){
		var obj = $(this);
		var id = "xiaojiang_"+i;
		if(frame.contents().find("#"+id).length == 0){
			var price = obj.parents("tr").find(".J_ItemPrice").text().trim();
			//console.log("456....."+price);
			// obj.attr("data-val",2);
			var priceInt = parseInt(price);
			obj.focus().val(priceInt/2).blur();
		}
	});
}
function initi() {
	window.setTimeout("initi()", 1000);
	var frame = $("#iFrameResizer0").contents().find("#act-frame").contents();
	if(frame.find("#zejiangxiao").length > 0) return;
	var input = document.createElement("input");
	input.type="button";
	input.value = "sycn";
	input.id = "zejiangxiao";
	input.onclick = cccc;
	frame.find(".m11-setprice-btns").append(input);
	//console.log("111....."+frame.length);
}
window.setTimeout("initi()", 1000);
