var input = null;
function sleep(n) {
    var start = new Date().getTime();
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
}
function test(){
  var myActivityPrice = parseFloat($("#myActivityPrice").val());
  $("input[id^='activityPrice']").each(function(){
    var obj = $(this);
    var num = getnum(obj);
    var price = (num*myActivityPrice).toFixed(2);
    obj.focus();
    obj.val(price);
    obj.blur();
    sleep(100);
  });

}
function test2(){
  $("input[id^='stock']").each(function(){
    var obj = $(this);
    obj.focus();
    obj.val(10);
    obj.blur();
    sleep(100);
  });
}
function getnum(st){
  var s = st.parents('td').prev().prev().children('div').text();
  return parseFloat(s);
}
function init() {
  if(input==null && $('.next-btn.next-btn-normal.next-btn-medium').length > 0){
    $('.next-btn.next-btn-normal.next-btn-medium').parent().append(document.createElement('hr'));
    input = document.createElement('input');
    input.id = "myActivityPrice";
    input.type = 'text';
    input.value = '0.475';
    $('.next-btn.next-btn-normal.next-btn-medium').parent().append(input);
    input = document.createElement('input');
    input.type = 'button';
    input.value = 'open'
    input.addEventListener("click", function(ev) {
      test();
      //test2();
    }, false);
    $('.next-btn.next-btn-normal.next-btn-medium').parent().append(input);
  }else{
    console.log('..................');
    window.setTimeout("init()", 1000);
  }
}
window.setTimeout("init()", 1000);
