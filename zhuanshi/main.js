function initSetp(){
    var url = "/main/index";
    if(currUrl().indexOf(url) > -1){
        // 选择单品推广
        if($(".s_fs_16.lh28:contains('单品推广')").length > 0){
            $(".s_fs_16.lh28:contains('单品推广')")[0].click();
        }
    }
    return false;
}
function initClose(){
    var url = "/main/index";
    if(currUrl().indexOf(url) > -1 && $('.modal-open').length >0 && $(".link-blue").length >0){
    	var del = $(".link-blue:contains('删除')");
    	if(del.length > 0){
        del[0].click();
        $(".dialog-ext-close")[0].click();
    	}
    }
    return false;
}
function initSelectOne(){
    var url = "step=2";
    if(currUrl().indexOf(url) > -1){
        // 填写第一步
        if($("input[name='solution']").length > 0){
            $("input[name='solution']").each(function(){
                if($(this).val() == 0){  //自定义
                    $(this).click();
                    return;
                }
            });
            if($("#dayBudgetInput").length > 0){
                setVal($("#dayBudgetInput"),'300');
            }
            if($(".btn.btn-blue.mr20:contains('下一步，设置推广单元')").length > 0){
                $(".btn.btn-blue.mr20:contains('下一步，设置推广单元')")[0].click();
            }
        }
    }
    return false;
}

function init_addBtn(){
    var url = "/crab/proxy/4?campaignModel=4";
    if(currUrl().indexOf(url) > -1){
        if(!$('#test').html() && $('.pt15').length > 0){
            var a = document.createElement('a');
            a.id = 'test';
            a.className = 'btn btn-blue mw100 mr10 fl';
            a.href = 'javascript:;';
            a.innerHTML = '开始';
            a.addEventListener("click", function(ev) {
                $("#create-plan").children(":first").click();
            }, false);
            $('.pt15').append(a);
        }
    }
    return false;
}


function initSetUnit_8(){
	var ret = true;
	if($('.input.w250').val()!=''&&$('.modal-open').length>0){
		var ff = $('input[data-valid-lazy="resource-price"][disabled!="disabled"]');
		if(ff.length > 0){
			ff.each(function(){
  			setVal($(this),'10');
  			ret = false;
			});
		}
		if(ret) return true;
		ret = true;
    $('.submit.btn.btn-blue.mw66.mr10').each(function(){
        this.click();
        ret = false;
        console.log('initSetUnit_8');
        return false;
    });
	}
	return ret;
}

function initSetUnit_7(){
    var ret = true;
    if($('.text-center.pt60.pb60.mb40[style="display: none;"]').length > 0){
        return false;
    }
    if($('.input.w250').val()!=''&&$('.modal-open').length==0){
        $('.btn:contains("选择溢价资源位")')[0].click();
    }
    if($('.input.w250').val()!=''&&$('.modal-open').length>0){
        $('input[type="checkbox"]').each(function(){
            if($(this).attr('mx-change').indexOf('toggleAll') > -1 && this.checked == false){
                this.click();
                ret = false;
                return false;
            }
        });
    }
    return ret;
}
function initSetUnit_6(){   //扩展定向
    var ret = true;
    $('.fl.target-choose-result-item:contains("元")').each(function(){
            return false;
    });
    if($('.input.w250').val()!=''&&$('.modal-open').length==0&&
    $('a[mx-click*="addTarget{priceType:price,targetType:6}"]').length > 0){
        $('a[mx-click*="addTarget{priceType:price,targetType:6}"]')[0].click();
    }
    if($('.input.w250').val()!=''&&$('.modal-open').length!=0){
        $('.fr.color-blue:contains("全部添加")')[0].click();
        var prices = $(".key-result-box.key-result-box-cpc.key-result-selected").find('.input[data-valid-lazy="item-price"]');
        if(prices.length > 0){
            prices.each(function(){
                setVal($(this),'0.12');
            });
            $('.btn.btn-blue.mw66.mr10').each(function(){
                this.click();
                console.log('initSetUnit_6');
                ret=false;
                return false;
            });
        }
    }
    return ret;
}
function initSetUnit_5(){   //智能定向-购物意图定向
    var ret = true;
    $('.fl.target-choose-result-item:contains("%")').each(function(){
        return false;
    });
    if($('.input.w250').val()!='' &&
        $('.modal-open').length==0 &&
        $('a[mx-click*="addTarget{priceType:premium,targetType:27}"]').length > 0){
            $('a[mx-click*="addTarget{priceType:premium,targetType:27}"]')[0].click();
    }
    if($('.input.w250').val()!=''&&$('.modal-open').length!=0){
        $('.fr.color-blue:contains("全部添加")')[0].click();
        if($('.input[data-valid-lazy="item-price"]').length > 0){
            $('.input[data-valid-lazy="item-price"]').each(function(){
                setVal($(this),'10');
            });
            $('.btn.btn-blue.mw66.mr10').each(function(){
                this.click();
                console.log('initSetUnit_5');
                ret=false;
                return false;
            });
        }
    }
    return ret;
}
function initSetUnit_4(){
    var ret = true;
    if($('.modal-open').length == 0 && $('.input.input-small[id*="targetType"]').length > 0){
        $('.input.input-small[id*="targetType"]').each(function(){
            setVal($(this),'1');
            ret = false;
            console.log('initSetUnit_4');
        });
    }
    return ret;
}
function initSetUnit_3(){
    var ret = true;
    if($('input[mx-change$="getSuggestPv"][mx-change^="vf_item_unit_target"]').length > 0){
        $('input[mx-change$="getSuggestPv"][mx-change^="vf_item_unit_target"]').each(function(){
            setVal($(this),'0.12');
            ret = false;
            console.log('initSetUnit_3');
            return false;
        });
    }
    return ret;
}

function initSetUnit_2(){
    var ret = true;
    var obj = null;
    if($('.input.w250').val()=='' && $('.modal-open').length==0){
        $('.btn:contains("添加推广宝贝")')[0].click();
    }
    if($('.input.w250').val()=='' && $('.modal-open').length>0){
        obj = toTitle();
        //obj = $('table[bx-name="tables"]').find('.btn:contains("推广")')[5];
    }
    if(obj){
        obj.click();
        console.log('initSetUnit_2');
        ret = false;
    }
    return ret;
}

function initSetUnit_1(){
    var ret = false;
    return ret;
}

var i1 = true,i2 = true,i3 = true,i4 = true,i5 = true,i6 = true,i7 = true,i8=true;
function initSetUnit_9(){
    $('.btn.btn-blue.mr20:contains("下一步，上传创意")').each(function(){
        i1 = true;i2 = true;i3 = true;i4 = true;i5 = true;i6 = true;i7 = true,i8=true;
        this.click();
    });
}

function initSetUnit(){
    //填写第二步
    var url = 'step=3';
    if(currUrl().indexOf(url) > -1){
        if(i1 && (i1 = initSetUnit_1())) {console.log('initSetUnit_1.stop');return false;}
        if(i2 && (i2 = initSetUnit_2())) {console.log('initSetUnit_2.stop');return false;}
        if(i3 && (i3 = initSetUnit_3())) {console.log('initSetUnit_3.stop');return false;}
        if(i4 && (i4 = initSetUnit_4())) {console.log('initSetUnit_4.stop');return false;}
        if(i5 && (i5 = initSetUnit_5())) {console.log('initSetUnit_5.stop');return false;}
        if(i6 && (i6 = initSetUnit_6())) {console.log('initSetUnit_6.stop');return false;}
        if(i7 && (i7 = initSetUnit_7())) {console.log('initSetUnit_7.stop');return false;}
        if(i8 && (i8 = initSetUnit_8())) {console.log('initSetUnit_8.stop');return false;}
        initSetUnit_9();
    }
    return false;
}

function initCy(){
    var url = 'step=4';
    if(currUrl().indexOf(url) > -1 && $('.btn.btn-blue.mr20:contains("下一步，计划创建完成")').length > 0){
        $('.btn.btn-blue.mr20:contains("下一步，计划创建完成")')[0].click();
        console.log("initCy.下一步，计划创建完成");
    }
    if(currUrl().indexOf(url) > -1 && $('.btn.btn-blue.mr20:contains("下一步，单元创建完成")').length > 0){
        $('.btn.btn-blue.mr20:contains("下一步，单元创建完成")')[0].click();
        console.log("initCy.下一步，单元创建完成");
    }
    return false;
}

function initCy2(){
    var url = 'step=5';
    if(currUrl().indexOf(url) > -1 && $('.btn.mw110:contains("新建其它计划")').length > 0){
        $('.btn.mw110:contains("新建其它计划")')[0].click();
        console.log("initCy2.新建其它计划");
    }
    if(currUrl().indexOf(url) > -1 && $('.btn.mw110:contains("新建其他推广单元")').length > 0){
        $('.btn.mw110:contains("新建其他推广单元")')[0].click();
        console.log("initCy2.新建其他推广单元");
    }
    return false;
}

function getParam(paramName) {
    paramValue = "", isFound = !1;
    var href = this.location.href;
    if (href.indexOf("=") > 1) {
        arrSource = href.substring(href.indexOf("/?") + 2, href.length).split("&");
        for (var i in arrSource) {
            var s = arrSource[i];
            if (s.split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                return s.split("=")[1];
            }
        }
    }
    return null;
}

function findBtn(_title){
    var btn = null;
    $('table.table[bx-name="tables"]').find('tr').each(function(){
        var title = $(this).find('td').find('a[href^="http://"]').text();
        var index = $.inArray(title, _title);
        if(index >= 0) {
            btn = $(this).find('td').find('.btn');
            //console.log("found................."+btn.text());
            return false;
        }
    });
    return btn;
}

function set1(key,value){
        var curTime = new Date().getTime();
        localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
}

function get1(key,exp){
    var data = localStorage.getItem(key);
    if(data){
    	var dataObj = JSON.parse(data);
    	if (new Date().getTime() - dataObj.time<=exp) {
        return dataObj.data;
    	}
    }
    return null;
}

function toTitle(){
    var btn = findBtn(array);
    if(btn){
        return btn[0];
    }else{
        if($('.page-next[title="下一页"]').length > 0){
            $('.page-next[title="下一页"]')[0].click();
        }else{
        		set1('zz',"000000");
            var url = "https://zuanshi.taobao.com/indexbp.jsp#!/crab/index?campaignModel=4&tab=unit&campaignId="+getParam("campaignId");
            console.log("找不到了"+url);
            window.location.href = url;
            //https://zuanshi.taobao.com/indexbp.jsp#!/crab/index?campaignId=367223175&campaignModel=4&tab=unit
        }
    }
}

function initnext(number,addnum){
	if(get1('zz',1000*5) == null){
		console.log("jump....");
		return;
	}
  var unit = getParam("tab");
  if(unit=='unit'){
  	var ul = $('.plan-list');
  	var li = ul.find('.plan-list-item-active');
  	var unitlist = li.find('.unit-list');
  	if(unitlist.children().length == number){
  		var next = li.next();
  		if(next){set1('zz',"000000");
  			var a = next.find('a')[0];
  			a.click();
  		}
  	}
  	if(unitlist.children().length == addnum){
  		var newplan = $('.fl.btn.btn-blue.mr10:contains("新建推广单元")')[0];
  		if(newplan){
  			newplan.click();
  		}
  	}
  }
	return false;
}

function init() {
    console.log("---->"+currUrl());
    window.setTimeout("init()", 2000);
    if(blur) return;
    if(initnext(my_jump_number,my_new_number )) return;
    if(init_addBtn()) return;
    if(initClose()) return;
    if(initSetp()) return;
    if(initSelectOne()) return;
    if(initSetUnit()) return;
    if(initCy()) return;
    if(initCy2()) return;
}




window.setTimeout("init()", 1500);

function currUrl(){
    return window.location.href;
}

function setVal(obj,val){
    obj.trigger('focus').val(val).trigger('change').trigger('blur');
}
var blur = false;

$(window).blur(function(){
    blur = true;
    console.log('window blur');
});
$(window).focus(function(){
    blur = false;
    //your code here
    console.log('window focus');
});