function TQG1(){
	var number = window.prompt("pls input number!","/2");
	$("input[id^='activityPrice']").each(function(){
		var price = $(this).parents("td").prev().prev().children().text();
		var num = eval(price+number);
		$(this).focus().val(num).blur();
	});
}
function TQG2(){
	var number = window.prompt("pls input number!","/2");
	$("input[id^='activityPrice']").each(function(){
		var price = $(this).parents("td").prev().prev().prev().children().text();
		console.log(price);
		var num = eval(price+number);
		$(this).focus().val(num).blur();
	});
}
var TQG = true;
function initTQG() {
	if(TQG)window.setTimeout("initTQG()", 1000);
	var host = window.location.host;
	var div =null;
	var click = null;
	if('qgch.sale.tmall.com'==host){div=$("#J_FormDetSubmit");click=TQG1};
	if('tmc.sale.tmall.com'==host){div=$("#dialog-footer-2");click=TQG2};
	if(div==null) return;
	if(div.length==0) return;
	var btn = $("#zejianghuodong");
	if(btn.length>0) return;
	btn = document.createElement('button');
	btn.id = "zejianghuodong";
	btn.innerHTML = "Hello";
	btn.className = "next-btn next-btn-primary next-btn-medium";
	btn.onclick =click;
	div.append(btn);
	TQG =false;
}
window.setTimeout("initTQG()", 2000);
