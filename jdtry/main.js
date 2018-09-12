var my_jd_try = null;
function myrefresh(){
	console.log(my_jd_try);
	if(my_jd_try=="申请成功！" || my_jd_try=="操作不要太快哦！" || my_jd_try==null || my_jd_try== ""){
		window.location.reload();
	}else{
		//alert(my_jd_try);
	}
}
function next(){
	$(".fp-next")[0].click();
}
function toUrl(url){
	//var if_w = $("body").width();
	//var if_h = "200px";
	//$("<iframe width='" + if_w + "' height='" + if_h + "' id='Frame1'></iframe>").prependTo('body');
	//$("#Frame1").attr("src", url);
	$("<a>").attr("href", url).attr("target", "_blank")[0].click();
	//window.open(url, "_blank", "alwaysLowered=yes,alwaysRaised=no,z-look=no");
}
function init2(){
	var str = "getActivityList";
	if(window.location.href.indexOf(str) > -1){
		var flag = true;
		$('.try-item').each(function(){
			var o = $(this);
			var str = o.find('.try-button').text().trim();console.log(str);
			if('已申请'!=str){
				flag = false;
				var url = o.find('.link').attr('href');console.log(url);
				toUrl(url);
				return false;
			}
		});
		if(flag){
			window.setTimeout('next()',1000);
		}else{
			window.setTimeout('myrefresh()',5000);
		}
	}
}
function init(){
	var btn = getBtn('app-btn btn-application','clstag','try');
	if(btn){
		btn.click();
		window.setTimeout("clickrq()",600);
	}
}
function clickrq(){
	var btn = getBtn('y','clstag','try');
	if(btn){
		btn.click();
		window.setTimeout("close()",600);
	}
}
function close(){
	if(window.opener){
		window.opener.my_jd_try = $('.tip-tit').text().trim();;
	}
	var btn = getBtn('ui-dialog-close','title','关闭');
	if(btn){
		btn.click();
		document.write('<script>window.close();</script>');
		document.write('<script>window.close();</script>');
		document.write('<script>window.close();</script>');
	}
}
function getBtn(s_class,s_attr,s_click){
	var btn;
	var objs = document.getElementsByClassName(s_class);
	if(objs){
		for(var o in objs){
			if(objs[o].getAttribute){
				var str = objs[o].getAttribute(s_attr) + "";
				if(str.indexOf(s_click)!=-1){
					btn = objs[o];
					break;
				}
			}
		}
	}
	return btn;
}
window.setTimeout("init()",600);
window.setTimeout("init2()",1000);