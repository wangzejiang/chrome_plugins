function init1(){
	window.setTimeout("init1()",2000);
	//console.log('zejiang init1...');
	if($("#add-crowd-container").length == 0) return;
	var input = createInput1();
	if(input!=null){
		$("#add-crowd-container").children(":first").append(input);
	}
}
function createInput1(){
	var id = "xiaojiang_ztc_cc";
	if($("#"+id).length > 0) return null;
	var span = document.createElement("span");
	span.id = id;
	span.className = 'btn ml5';
	span.innerHTML = "add";
	span.onclick = addTest1;
	return span;
}
function addTest1(){
	var g = 1;
	for(var i=0;i<=1;i++){
		for(var j=3;j<=4;j++){
			for(var k=0;k<=6;k++){
				window.setTimeout("clicksub("+i+","+j+","+k+")",5000*g);
				g++;
			}
		}
	}
	window.setTimeout("alert('over')",5000*g);
}
var dts = new Array(
"\u6027\u522b",
"\u5e74\u9f84",
"\u6708\u5747\u6d88\u8d39\u989d\u5ea6"
);
var sexs = new Array(
"\u5973",
"\u7537");
var ages = new Array(
"\u0031\u0038\u5c81\u4ee5\u4e0b",
"\u0031\u0038\u002d\u0032\u0034\u5c81",
"\u0032\u0035\u002d\u0032\u0039\u5c81",
"\u0033\u0030\u002d\u0033\u0034\u5c81",
"\u0033\u0035\u002d\u0033\u0039\u5c81",
"\u0034\u0030\u002d\u0034\u0039\u5c81",
"\u0035\u0030\u5c81\u53ca\u4ee5\u4e0a");
var mms = new Array(
"\u0033\u0030\u0030\u5143\u4ee5\u4e0b",
"\u0033\u0030\u0030\u002d\u0033\u0039\u0039\u5143",
"\u0034\u0030\u0030\u002d\u0035\u0034\u0039\u5143",
"\u0035\u0035\u0030\u002d\u0037\u0034\u0039\u5143",
"\u0037\u0035\u0030\u002d\u0031\u0030\u0034\u0039\u5143",
"\u0031\u0030\u0035\u0030\u002d\u0031\u0037\u0034\u0039\u5143",
"\u0031\u0037\u0035\u0030\u5143\u53ca\u4ee5\u4e0a");
function finddt(str){
	var ret = $("dt:contains('"+str+"')");
	$("dt:contains('"+str+"')").each(function(){
		if(str==$(this).text()){
			ret = $(this);
			return false;
		}
	});
	return ret;
}
var _sex_span,age_span,mm_span;
function clicksubd(){
	sex_span.prev().click();
	age_span.prev().click();
	mm_span.prev().click();
//console.log("sex->"+sex_span.length);
	//console.log("age->"+age_span.length);
	//console.log("mm->"+mm_span.length);
}
function clicksub(i,j,k){
	var sex = sexs[i];
	var age = ages[j];
	var mm = mms[k];
	$("#_input_name").trigger("focus").val(sex+age+mm).trigger("blur");
	$("#_input_premium").trigger("focus").val(100).trigger("blur");
	sex_span = finddt(dts[0]).parent().find("span:contains('"+sex+"')");
	age_span = finddt(dts[1]).parent().find("span:contains('"+age+"')");
	mm_span = finddt(dts[2]).parent().find("span:contains('"+mm+"')");
	clicksubd();
	$("a:contains('\u786e\u8ba4\u6dfb\u52a0')")[0].click();
	window.setTimeout("clicksubd()",2000);
}
window.setTimeout("init1()",5000);