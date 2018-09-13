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
    if(currUrl().indexOf(url) > -1 && $('.modal-open').length >0){
        // 关闭草稿按钮
        if($(".link-blue").length >0){
            $(".link-blue:contains('删除')")[0].click();
            $(".dialog-ext-close")[0].click();
        }else{
            console.log('initClose no found');
        }
    }
    return false;
}
function initSelectOne(){
    var url = "/main/index";
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
                $("#dayBudgetInput").trigger('focus');
                $("#dayBudgetInput").val('300');
                $("#dayBudgetInput").trigger('blur');
                $("#dayBudgetInput").trigger('focus');
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
                return false;
            }
        });
        $('.submit.btn.btn-blue.mw66.mr10').each(function(){
            this.click();
            ret = false;
            console.log('initSetUnit_7');
            return false;
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
                $(this).trigger('focus');
                $(this).val('0.12');
                $(this).trigger('blur');
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
                $(this).trigger('focus');
                $(this).val('10');
                $(this).trigger('blur');
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
            $(this).trigger('focus');
            $(this).val('1');
            $(this).trigger('blur');
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
            $(this).trigger('focus');
            $(this).val('0.12');
            $(this).trigger('blur');
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
    if($('.input.w250').val()=='' && $('.modal-open').length>0){
        obj = $('table[bx-name="tables"]').find('.btn:contains("推广")')[5];
    }
    if(obj){
        obj.click();
        console.log('initSetUnit_2');
        ret = false;
    }
    return ret;
}
function initSetUnit_1(){
    var ret = true;
    if($('.input.w250').val()=='' && $('.modal-open').length==0){
        $('.btn:contains("添加推广宝贝")').each(function(){
            this.click();
            console.log('initSetUnit_1');
            ret = false;
            return false;
        });
    }
    return ret;
}
var i1 = true,i2 = true,i3 = true,i4 = true,i5 = true,i6 = true,i7 = true;
function initSetUnit_8(){
    $('.btn.btn-blue.mr20:contains("下一步，上传创意")').each(function(){
        console.log("initSetUnit...");
        i1 = true;i2 = true;i3 = true;i4 = true;i5 = true;i6 = true;i7 = true;
        this.click();
    });
}
function initSetUnit(){
    //填写第二步
    var url = 'step=3';
    if(currUrl().indexOf(url) > -1){
        if(i1&&initSetUnit_1()) {console.log('initSetUnit_1.stop');return false}else{i1=false};
        if(i1)return false;
        if(i2&&initSetUnit_2()) {console.log('initSetUnit_2.stop');return false}else{i2=false};
        if(i2)return false;
        if(i3&&initSetUnit_3()) {console.log('initSetUnit_3.stop');return false}else{i3=false};
        if(i3)return false;
        if(i4&&initSetUnit_4()) {console.log('initSetUnit_4.stop');return false}else{i4=false};
        if(i4)return false;
        if(i5&&initSetUnit_5()) {console.log('initSetUnit_5.stop');return false}else{i5=false};
        if(i5)return false;
        if(i6&&initSetUnit_6()) {console.log('initSetUnit_6.stop');return false}else{i6=false};
        if(i6)return false;
        if(i7&&initSetUnit_7()) {console.log('initSetUnit_7.stop');return false}else{i7=false};;
        if(i7)return false;
        initSetUnit_8();
    }
    return false;
}

function initCy(){
    var url = 'step=4';
    if(currUrl().indexOf(url) > -1 && $('.btn.btn-blue.mr20:contains("下一步，计划创建完成")').length > 0){
        $('.btn.btn-blue.mr20:contains("下一步，计划创建完成")')[0].click();
    }
    if(currUrl().indexOf(url) > -1 && $('.btn.btn-blue.mr20:contains("下一步，单元创建完成")').length > 0){
        $('.btn.btn-blue.mr20:contains("下一步，单元创建完成")')[0].click();
    }
    var url = 'step=5';
    if(currUrl().indexOf(url) > -1 && $('.btn.mw110:contains("新建其它计划")').length > 0){
        $('.btn.mw110:contains("新建其它计划")')[0].click();
    }
    return false;
}

function init() {
    console.log("---->"+currUrl());
    window.setTimeout("init()", 2000);

    $('.input.w200').trigger('focus');
    $('.input.w200').val("兼容nerf热火枪电动连发软弹枪国产stf死拽夫改装可发射器玩具枪");
    $('.input.w200').trigger('blur');
    $('.input.w200').trigger('focus');
    $('.input.w200').trigger('mx-keyup');

    return;
    if(init_addBtn()) return;
    if(initClose()) return;
    if(initSetp()) return;
    if(initSelectOne()) return;
    if(initSetUnit()) return;
    if(initCy()) return;
    if(initCy()) return;
}

window.setTimeout("init()", 2000);

function currUrl(){
    return window.location.href;
}