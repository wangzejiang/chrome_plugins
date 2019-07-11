console.log(3);
function initGTTTJ(){
	console.log(2);
	if(window.location.host!='tttj.sale.taobao.com') return;
	if($('#J_FormDetSubmit').length <= 0) return;
	console.log(1);
	var btn = $("#zejiangTTTJ");
	if(btn.length>0) return;
	btn = document.createElement('button');
	btn.id = "zejiangTTTJ";
	btn.innerHTML = "TTTJ";
	btn.className = "next-btn next-btn-primary next-btn-medium";
//	btn.onclick = click;
	$('#J_FormDetSubmit').append(btn);
}