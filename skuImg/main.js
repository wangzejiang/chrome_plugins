function initimg(){
	console.log('zejiang init...');
	// show sku
	var ul3 = $("ul[data-property='\u5957\u9910\u7c7b\u578b']");
	ul3.find('li').attr("style","");
	var ul4 = $("ul[data-property='\u989c\u8272\u5206\u7c7b']");
	ul4.find('li').attr("style","");
	// down sku
	var ul = $("ul[data-property='\u989c\u8272\u5206\u7c7b']");
	var ul2 = ul.clone();
	ul2.html("");
	var iddd = 1;
	ul.find('li').each(function(){
		var li = $(this);
		if(li.attr('de')=='false'){
			return true;
		}
		li.attr('de','false');
		var title = li.attr('title');
		var a = li.find('a');
		var style = a.attr('style');
		var li = createLi(title,style,iddd++);
		ul2.append(li);
	});
	// down main img
	var idd = 1;
	var img = $("img[alt='\u5546\u54c1\u9884\u89c8\u56fe']");
	img.each(function(){
		var url = $(this).attr('src');
		if(url=='undefound') return true;
		var li = createLi("",url,"m"+idd++);
		ul2.append(li);
	});
	ul.parent().append(ul2);
}

function createLi(title,style,idd){
	var url = style.replace('background:url(','').replace('_40x40q90.jpg) center no-repeat;','').replace("_60x60q90.jpg","");
	var a = document.createElement('a');
	a.href = "https:"+url;
	a.innerText = idd;
	a.download = title;
	a.target="_blank";
	console.log("title-->"+title);
	console.log("url---->"+url);
	var li = document.createElement('li');
	li.appendChild(a);
	li.de = 'false';
	li.title = title;	
	return li;
}


window.setTimeout("initimg()",1000);