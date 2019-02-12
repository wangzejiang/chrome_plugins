function init2(){
	console.log("zejiang init2");
	if($('.cp.keyword-text').length==0){
		window.setTimeout("init2()",1000);
	}
	$('.cp.keyword-text').each(function(){
		var title = $(this).attr('title');
		var id = $(this).attr('id');
		var wid = id.split('_')[1];
		var dd = document.createElement('font');
		dd.color = 'red';
		var rs = getConst(wid) / getTransactionshippingtotal(wid)
		dd.innerText = rs.toFixed(2);
		$(this).append(dd);
	});
	//J_bidWord_59651990_1098537503_458210252185_cost
	//J_bidWord_59651990_1098537503_458210252185_transactionshippingtotal
	//J_458210252185_matchScope
}

function getConst(id){
	var text1 = "J_bidWord_";
	var text2 = "_"+id+"_cost";
	var text = $("span[id^='"+text1+"'][id$='"+text2+"']").text().replace("\uffe5","").replace("-","").replace(",","");
	if(""==text)return 0;
	return parseFloat(text);
}
function getTransactionshippingtotal(id){
	var text1 = "J_bidWord_";
	var text2 = "_"+id+"_transactionshippingtotal";
	var text = $("span[id^='"+text1+"'][id$='"+text2+"']").text().replace("\uffe5","").replace("-","").replace(",","");
	if(""==text)return 0;
	return parseFloat(text);
}
window.setTimeout("init2()",5000);