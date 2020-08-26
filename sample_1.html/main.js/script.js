/*global $*/
$(document).ready(function(){
//1件ずつ読み込む----------------------------------------------------------//
	//postの総数をカウントする
	var n = $(".post").length;
	//初期表示5件以上は非表示にする
	$(".post:gt(1)").hide();
	//初期表示1件
	var Num = 1;
	//もっと見るボタンをクリックした時
	$("#btnClick").click(function(){
		Num += 1;//1件づつ追加する
		$(".post:lt("+Num+")").fadeIn(1000);//Num+5つ目以前を表示
		//残りのpostの個数が表示件数(Num)より少なくなったら
		if(n <= Num){
			$("#btnClick").hide();//もっと見るボタンを非表示にする
		}
	});
//１件ずつ読み込む----------------------------------------------------------//
});
/*質問部分*/
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      $answer.slideDown();
      $(this).find('span').text('-');
      
    }
  });
 
/*メニュー部分*/
 $(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});
 





















































