var my_jd_try = null;
var options = localStorage.options ? JSON.parse(localStorage.options) : {'test':true};

function myrefresh(){
	console.log(my_jd_try);
	if(my_jd_try=="申请成功！" || my_jd_try=="操作不要太快哦！" || my_jd_try==null || my_jd_try== ""){
		window.location.reload();
	}else{
		$(".fp-next")[0].click();   // 处理当前页有未知信息
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
	//console.log(options.test);
	if(options.test == false){
		window.setTimeout('init2()',1000);
		return;
	}
	var str = "getActivityList";
	if(window.location.href.indexOf(str) > -1){
		var flag = true;
		$('.try-item').each(function(){
			var o = $(this);
			var str = o.find('.try-button').text().trim();console.log(str);
			if('已申请'!=str && '未中选'!=str){
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
		window.setTimeout("close()",1000);
	}
}
function over(){
	document.write('<script>window.close();</script>');
	window.setTimeout("over()",1000);
}
function close(){
	if(window.opener){
		var res = $('.tip-tit').text().trim() || $('.ex-con').text().trim();
		window.opener.my_jd_try = res;
	}
	var btn = getBtn('ui-dialog-close','title','关闭');
	if(btn){
		btn.click();
		over();
	}
	window.setTimeout("close()",1000);
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

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.cmd == 'closeed'){
			console.log("关闭。。。。。。。。。");
			options.test = false;
			localStorage.options = JSON.stringify(options);
			sendResponse(request.value);
		}
		if(request.cmd == 'opened'){
			console.log("打开。。。。。。。。。");
			options.test = true;
			localStorage.options = JSON.stringify(options);
			sendResponse(request.value);
		}
	}
);
