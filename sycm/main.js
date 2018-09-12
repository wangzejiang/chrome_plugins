function htmlEncode(t) {
    return t != null ? t.toString().replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
}

function arrayToTable(json) {
    var tableHs = {
        keyword: '关键词',
        seIpvUvHits: '搜索人气',
        onlineGoodsCnt: '在线商品数',
        sePvIndex: '搜索热度',
        tradeIndex: '交易指数',
        clickRate: '点击率',
        clickHits: '点击人气',
        clickHot: '点击热度',
        p4pAmt: '直通车参考价',
        spvRatio: '搜索人数占比',
        tmClickRatio: '商城点击占比',
        payConvRate: '支付转化率'
    };
    var output = '<table border="1">';
    // th start
    var keys = Object.keys(tableHs);//Object.keys(json[0]);
    output += '<thead>';
    output += '<tr>';
    output += '<th>' + 'No.' + '</th>';
    for (var i in keys) {
        var g = keys[i];
        var val = tableHs[g];
        if (val == '') {
            val = g;
        }
        output += '<th>' + htmlEncode(val) + '(' + g + ')' + '</th>';
    }
    output += '<th>' + '竞争度(jzd)' + '</th>';
    output += '<th>' + '竞争度(jzd2)' + '</th>';
    output += '</tr>';
    output += '</thead>';
    // th end
    output += '<tbody>';
    for (var j in json) {
        // data
        var obj = json[j];
        var suv = parseFloat(obj['seIpvUvHits']);
        var onlineGoodsCnt = parseFloat(obj['onlineGoodsCnt']);
        var clickRate = parseFloat(obj['clickRate']);
        var payConvRate = parseFloat(obj['payConvRate']);
        var jzd = suv / onlineGoodsCnt * 100;
        var jzd2 = suv * clickRate * payConvRate / onlineGoodsCnt;
        // print
        if (suv > 2000) {
            output += '<tr style="background-color:#ffffcc">';
        } else if (suv > 1000) {
            output += '<tr style="background-color:#99ffff">';
        } else if (suv > 600) {
            output += '<tr style="background-color:#cccccc">';
        } else {
            output += '<tr>';
		}
		output += '<td>' + j + '</td>';
        for (var k in keys) {
            var d = keys[k];
            if (d == 'keyword') {
				output += '<td title="' + tableHs[d] + '"><a target="_blank" href="https://s.taobao.com/search?q=' + obj['keyword'] + '" >' + htmlEncode(obj[d]) + '</a></td>'
            } else {
                output += '<td title="' + tableHs[d] + '">' + htmlEncode(obj[d]) + '</td>';
            }
        }
        output += '<td>' + jzd + '</td>';
        output += '<td>' + jzd2 + '</td>';
        output += '</tr>';
    }
    output += '</tbody>';
    output += '</table>';
    return output;
}

function toUrl(keyword){
	var url = 'https://sycm.taobao.com/mc/searchword/relatedWord.json?dateRange=' + getParam('dateRange') + '&dateType=' + getParam('dateType') + '&device=' + getParam('device') + '&keyword=' + keyword;
    window.open(url);
}

function comp(sval1, sval2) {
    var val1 = parseFloat(sval1);
    var val2 = parseFloat(sval2);
    if (val1 < val2) {
        return 1;
    } else if (val1 > val2) {
        return -1;
    } else {
        return 0;
    }
}

function onsort() {
    var table = document.getElementsByTagName("table")[0];
    var headers = table.getElementsByTagName("th");
    for (var i = 0; i < headers.length; i++) {
        (function(n) {
            var flag = false;
            headers[n].style.backgroundColor = "red";
            headers[n].id = "init" + n;
            headers[n].onclick = function() {
                var tbody = table.tBodies[0];
                var rows = tbody.getElementsByTagName("tr");
                rows = Array.prototype.slice.call(rows, 0);
                rows.sort(function(row1, row2) {
                    var cell1 = row1.getElementsByTagName("td")[n];
                    var cell2 = row2.getElementsByTagName("td")[n];
                    var val1 = cell1.textContent || cell1.innerText;
                    var val2 = cell2.textContent || cell2.innerText;
                    return comp(val1, val2);
                });
                if (flag) {
                    rows.reverse();
                }
                for (var i = 0; i < rows.length; i++) {
                    tbody.appendChild(rows[i]);
                }
                flag = !flag;
            }
        }(i));
    }
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

function init() {
    var input = document.createElement('input');
    input.type = 'button';
    input.value = 'open'
    input.addEventListener("click", function(ev) {
        var keyword = $(".ant-input").val();
        if (keyword != '') {
            var url = 'https://sycm.taobao.com/mc/searchword/relatedWord.json?dateRange=' + getParam('dateRange') + '&dateType=' + getParam('dateType') + '&device=' + getParam('device') + '&keyword=' + keyword;
            window.open(url);
        }
    }, false);
    $('.oui-breadcrumb').append(input);
}

function initJson() {
    if (window.location.href.indexOf("relatedWord") > -1) {
        var str = document.body.innerText;
        var obj = $.parseJSON(str).data;
        document.body.innerHTML = arrayToTable(obj);
		onsort();
		$("a").css("text-decoration", "none");
        $("#init13").click();
    }
}

window.setTimeout("init()", 1000);
window.setTimeout("initJson()", 1000);