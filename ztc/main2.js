function init2(){
	//console.log("zejiang init word");
	if($('.cp.keyword-text').length==0){
		window.setTimeout("init2()",1000);
		return;
	}
	var length = $('.cp.keyword-text').length;
	var avg_const = 0;
	var avg_total = 0;
	$('.cp.keyword-text').each(function(){
		var title = $(this).attr('title');
		var id = $(this).attr('id');
		var wid = id.split('_')[1];
		avg_const += getConst(wid);
		avg_total += getTransactionshippingtotal(wid);
	});
	avg_const = avg_const/length;
	avg_total = avg_total/length;
	var avg = avg_const / avg_total;
	if($('#zejiang_avg').length>0){
		$('#zejiang_avg').text(avg);
	}else{
		$('.keyword-text').children(":first").append("<font id='zejiang_avg'>"+avg+"</font>");
	}

	$('.cp.keyword-text').each(function(){
		var title = $(this).attr('title');
		var id = $(this).attr('id');
		var wid = id.split('_')[1];
		var newid = "zejiang_"+id;
		var cost = getConst(wid);
		var total = getTransactionshippingtotal(wid);
		var rs =  cost/ total;
		rs = rs.toFixed(2);
		rs = total==0? cost : rs;
		var color = total==0?'blue':(rs >=avg? 'red' : 'green');
		if($('#'+newid).length>0){
			$('#'+newid).val(rs);
			$('#'+newid).attr('color',color);
			return false;
		}
		var dd = document.createElement('font');
		dd.color = color;
		dd.id = newid;
		dd.innerText = rs;
		$(this).append(dd);
	});
	//J_bidWord_59651990_1098537503_458210252185_cost
	//J_bidWord_59651990_1098537503_458210252185_transactionshippingtotal
	//J_458210252185_matchScope
	window.setTimeout("init2()",2000);
}

function getConst(id){
	var text1 = "J_bidWord_";
	var text2 = "_"+id+"_cost";
	var text = $("span[id^='"+text1+"'][id$='"+text2+"']").text().replace("\uffe5","").replace("-","").replace(",","");
	if(""==text)return parseFloat(0);
	return parseFloat(text);
}
function getTransactionshippingtotal(id){
	var text1 = "J_bidWord_";
	var text2 = "_"+id+"_transactionshippingtotal";
	var text = $("span[id^='"+text1+"'][id$='"+text2+"']").text().replace("\uffe5","").replace("-","").replace(",","");
	if(""==text)return parseFloat(0);
	return parseFloat(text);
}
window.setTimeout("init2()",2000);