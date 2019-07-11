function dd(){
	var number = window.prompt("pls input number!","/2");
	$("input[id^='activityPrice']").each(function(){
		var price = $(this).parents("td").prev().prev().children().text();
		var num = eval(price+number);
		$(this).focus().val(num).blur();
	});
}
function dd2(){
	var number = window.prompt("pls input number!","/2");
	$("input[id^='activityPrice']").each(function(){
		var price = $(this).parents("td").prev().prev().prev().children().text();
		console.log(price);
		var num = eval(price+number);
		$(this).focus().val(num).blur();
	});
}
function inithuodong() {
window.setTimeout("inithuodong()", 1000);
var host = window.location.host;
var div =null;
var click = null;
if('qgch.sale.tmall.com'==host){div=$("#J_FormDetSubmit");click=dd};
if('tmc.sale.tmall.com'==host){div=$("#dialog-footer-2");click=dd2};
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
}
window.setTimeout("inithuodong()", 2000);
