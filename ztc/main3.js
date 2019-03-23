function init3(){
	var mx = getMx("J_mx_","_cost_");
	console.log("zejiang init3 ren qun-->"+mx.length);
	if(mx.length==0){
		window.setTimeout("init3()",1000);
		return;
	}
	var total_price = getMx("J_mx_","_total_cost");
	var total_count = getMx("J_mx_","_total_transactionshippingtotal");
	var avg = val23(total_price.text()) / val23(total_count.text());
	if($("#zejiang_avg").length){
		$("#zejiang_avg").text(avg);
	}else{
		total_price.append(document.createElement('br')).append("<font id='zejiang_avg'>"+avg+"</font>");
	}
	mx.each(function(){
		var cost = getConst3($(this).text());
		var id = $(this).attr('id');
		var wid = id.split('_')[4];
		var newid = "zejiang_"+wid;
		var total = getTransactionshippingtotal3(wid);
		var rs = cost / total;
		rs = rs.toFixed(2);
		rs = total==0? cost : rs;
		var color = total==0?'blue':(rs >=avg? 'red' : 'green');
		if($('#'+newid).length>0){
			$('#'+newid).val(rs);
			$('#'+newid).attr('color',color);
			return true;
		}
		var dd = document.createElement('font');
		dd.color =color;
		dd.id = newid;
		dd.innerText = rs;
		$(this).append(document.createElement('br')).append(dd);
	});

	
	// J_mx_8367_cost_456991861875
	// J_mx_8367_transactionshippingtotal_456991861875
	window.setTimeout("init3()",2000);
}
function getMx(text1,text2){
	return $("td[id^='"+text1+"'][id*='"+text2+"']");
}
function getConst3(val){
	var text = val23(val);
	return text;
}
function getTransactionshippingtotal3(id){
	var text1 = "J_mx_";
	var text2 = "_transactionshippingtotal_"+id;
	var text = $("td[id^='"+text1+"'][id$='"+text2+"']").text();
	return val23(text);
}
function val23(val){
	var text = val.replace("\uffe5","").replace("-","").replace(",","").trim();
	if(""==text)return parseFloat(0);
	console.log("zejiang -->"+text);
	return parseFloat(text);
}
window.setTimeout("init3()",1000);