function inputTTTJ(){
	var flag = isFlag();
	console.log("flag:"+flag);
	var str = flag?"td:eq(2)":"td:eq(1)";
	$("input[id^='activityPrice']").each(function(i){
		var input = $(this);
		var price_td = input.parents("tr").children(str);
		var price = price_td.text()=='/'?price_td.prev().text():price_td.text();
		var price_float = parseFloat(price) / 2;
		input.focus().val(price_float).blur();
	});
}
function chickTTTJ(){
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
	window.setTimeout("inputTTTJ()", 1000);
}
function isFlag(){
	return $("span:contains('\u5957\u9910\u7c7b\u578b\uff1a')").length>0 || $("span:contains('\u5927\u5c0f\uff1a')").length>0;
}
var TTTJ = true;
function initTTTJ(){
	if(TTTJ) window.setTimeout("initTTTJ()", 1000);
	if(window.location.host!='tttj.sale.tmall.com') return;
	if($('#J_FormDetSubmit').length <= 0) return;
	var btn = $("#zejiangTTTJ");
	if(btn.length>0) return;
	btn = document.createElement('button');
	btn.id = "zejiangTTTJ";
	btn.innerHTML = "TTTJ";
	btn.className = "next-btn next-btn-primary next-btn-medium";
	btn.onclick = chickTTTJ;
	$('#J_FormDetSubmit').append(btn);
	TTTJ = false;
}
window.setTimeout("initTTTJ()", 1000);