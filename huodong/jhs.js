function cccJHS(){
	var flag = isFlag();
	console.log("flag:"+flag);
	var str = flag?"td:eq(2)":"td:eq(1)";
	var tdhtml = null;
	var trs = $("input[id^='activityPrice']").eq(0).parents("tbody").children();
	trs.each(function(){
		var tr = $(this);
		var rowspan = tr.children('td:eq(0)').attr('rowspan');
		if(rowspan != 1){
			tr.children('td:eq(0)').attr('rowspan','1');
			tdhtml = tr.children('td:eq(0)').html();
		}else if(tdhtml !=null){
			var td = document.createElement("td");
			td.innerHTML = tdhtml;
			tr.prepend(td);
		}
	});
	$("input[id^='activityPrice']").each(function(){
		var input = $(this);
		var price_td = input.parents("tr").children(str);
		var price = price_td.text()=='/'?price_td.prev().text():price_td.text();
		var price_float = parseFloat(price) / 2;
		input.focus().val(price_float).blur();
	});
}
function isFlag(){
	return $("span:contains('\u5957\u9910\u7c7b\u578b\uff1a')").length>0 || $("span:contains('\u5927\u5c0f\uff1a')").length>0;
}
function getArray(str1){
	var map = new HashMap();
	var str = str1.substr(str1.indexOf('\uff1a')+1);
	var strs = str.split("\u60a8\u7684\u0073\u006b\u0075\uff1a");
	for(var i in strs){
		var sstrd = strs[i];
		var sstr = sstrd.substring(0,sstrd.indexOf('\u5143\uff1b')).trim();
		if(sstr!=""){
			var skustr = sstr.split('\u0020\u7684\u5728\u7ba1\u63a7\u671f\u6807\u4ef7\u4e3a');
			var sku = skustr[0];
			var price = skustr[1].replace('\u5143','');
			map.put(sku,price);
		}
	}
	return map;
}
function initJHSERROR(){
	window.setTimeout("initJHSERROR()", 1000);
	console.log("initJHSERROR");
	var div = $(".next-dialog.right.next-overlay-inner");
	console.log("div"+div.length);
	if(div.length==0)return;
	var div2 = div.find(".next-feedback-title");
	console.log("div2"+div2.length);
	if(div2.length==0)return;
	var str = div2.text();
	var map = getArray(str);
	console.log("map"+map.size());
	if(map.size()==0) return;
	var btn = div.find('.next-btn.next-btn-primary.next-btn-medium');
	console.log("btn"+btn.length);
	if(btn.length==0)return;
	btn.click();
	var flag = isFlag();
	$("input[id^='activityPrice']").each(function(){
		var input = $(this);
		var tr = input.parents("tr");
		var sku = null;
		if(flag){
			sku = tr.children("td:eq(0)").text()+";"+tr.children("td:eq(1)").text();
		}else{
			sku = tr.children("td:eq(0)").text();	
		}
		if(sku==null) return;
		var price = map.get(sku);
		input.focus().val(price).blur();
		console.log("sku:"+sku+",price:"+price);
	});
}
function initJHS() {
	window.setTimeout("initJHS()", 1000);
	var div = $(".next-overlay-wrapper.next-dialog-wrapper.opened");
	if(div.length == 0)return;
	var div2 = div.find('.next-dialog-footer');
	if(div2.length == 0)return;
	
	if(div2.find("#zejiangJHS").length > 0) return;
	var btn = document.createElement("button");
	btn.className="next-btn next-btn-normal next-btn-medium";
	btn.type="button";
	btn.innerHTML = "JHS";
	btn.id = "zejiangJHS";
	btn.onclick = cccJHS;
	div2.append(btn);
	console.log("initJHS over...");
}
window.setTimeout("initJHS()", 1000);
window.setTimeout("initJHSERROR()", 1000);
