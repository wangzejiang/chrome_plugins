function initYHJ(){
	window.setTimeout("initYHJ2()",10000);	
	var btn_yhj = $(".interactive-list").find(".item")[5];
	//if(btn_yhj.length<=0) return;
	//btn_yhj.click();console.log("click btn");
}
function initYHJ2(){
	
}
window.setTimeout("initYHJ()",10000);
window.setTimeout("initYHJ2()",1000);