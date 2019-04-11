/*
function init(){
	console.log('zejiang init...');
	var btn = getBtn('btn','mx-click','addCrowd');
	if(btn){
		btn.parentElement.appendChild(createInput());
	}
}
function getBtn(s_class,s_attr,s_click){
	var btn;
	var objs = document.getElementsByClassName(s_class);
	//console.log(objs);
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
function createInput(){
	var span = document.createElement("span");
	span.className = 'btn ml5';
	span.innerHTML = "add";
	span.onclick = addTest;
	return span;
}
function addTest(){
	getBtn('btn','mx-click','addCrowd').click();
	window.setTimeout("clickrq()",2000);
}
function clickrq(){
	getBtn('tabs-list','mx-click','toggleCrowdType{id:user-defined,tmpl:add-search-crowds2}').click();
	var g = 1;
	for(var i=0;i<=1;i++){
		for(var j=1;j<=7;j++){
			for(var k=0;k<=6;k++){
				window.setTimeout("clicksub("+i+","+j+","+k+")",2000*g);
				g++;
			}
		}
	}
	window.setTimeout("alert('over')",2000*g);
}
var sex = new Array("\u5973\u000d\u000a","\u7537\u000d\u000a");

var age = new Array("00",
"\u0031\u0038\u5c81\u4e0b",
"\u0031\u0038\u002d\u0032\u0034\u5c81",
"\u0032\u0035\u002d\u0032\u0039\u5c81",
"\u0033\u0030\u002d\u0033\u0034\u5c81",
"\u0033\u0035\u002d\u0033\u0039\u5c81",
"\u0034\u0030\u002d\u0034\u0039\u5c81",
"\u0035\u0030\u5c81\u4e0a");

var mm = new Array("\u0033\u0030\u0030\u5143\u4e0b",
"\u0033\u0030\u0030\u002d\u0033\u0039\u0039\u5143",
"\u0034\u0030\u0030\u002d\u0035\u0034\u0039\u5143",
"\u0035\u0035\u0030\u002d\u0037\u0034\u0039\u5143",
"\u0037\u0035\u0030\u002d\u0031\u0030\u0034\u0039\u5143",
"\u0031\u0030\u0035\u0030\u002d\u0031\u0037\u0034\u0039\u5143",
"\u0031\u0037\u0035\u0030\u5143\u4e0a");

function clicksub(i,j,k){
	document.getElementById('J_subTag_100000_'+i).click();
	document.getElementById('J_subTag_100001_'+j).click();
	document.getElementById('J_subTag_100002_'+k).click();
	getBtn('input w100','id','crowdList_crowd_price_percent').value = 100;
	getBtn('input','id','crowdList_crowdName_input').value = sex[i]+""+age[j]+""+mm[k];
	getBtn('btn btn-size30 btn-orange','mx-click','onSubmit<prevent>').click();
	document.getElementById('J_subTag_100000_'+i).click();
	document.getElementById('J_subTag_100001_'+j).click();
	document.getElementById('J_subTag_100002_'+k).click();
}
//window.setTimeout("init()",5000);
*/