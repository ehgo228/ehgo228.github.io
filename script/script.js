//자바

//탑메뉴
$(".navi li").mouseover(function(){
    $(this).find(".sub_back, .sub").stop().slideDown();
})
$(".navi li").mouseout(function(){
    $(this).find(".sub_back, .sub").stop().slideUp();
})

// 탑메뉴 스크롤(구글링)
$(document).ready(function($) {

    $(".move").click(function(event){         
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

    });

});

//기술
$(".skill li").mouseover(function(){
    $(this).find(".icon").stop().fadeIn()
})

//슬라이드 스크립트(slick)
$( document ).ready( function() {
$('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  } );

//갤러리 호버
$(".photo li").mouseover(function(){
    $(this).find(".ptxt").stop().show(0);
})
$(".photo li").mouseout(function(){
    $(this).find(".ptxt").stop().hide(0);
})

//캐릭터팝업
$(".mp").click(function(){
    $(".web").show()
    $('.fade').resize();
    $('.fade').slick('refresh');
})
$(".bt button").click(function(){
    $(".web").hide();
})
$(".port1").click(function(){
    $(".character").show()
    $('.fade').resize();
    $('.fade').slick('refresh');
})
$(".bt button").click(function(){
    $(".character").hide();
})
$(".port2").click(function(){
    $(".logo_me").show()
    $('.fade').resize();
    $('.fade').slick('refresh');
})
$(".bt button").click(function(){
    $(".logo_me").hide();
})
$(".port3").click(function(){
    $(".poster").show()
    $('.fade').resize();
    $('.fade').slick('refresh');
})
$(".bt button").click(function(){
    $(".poster").hide();
})
$(".port4").click(function(){
    $(".etc").show()
    $('.fade').resize();
    $('.fade').slick('refresh');
})
$(".bt button").click(function(){
    $(".etc").hide();
})
$(".bn").click(function(){
    $(".banner").show()
    $('.fade').resize();
    $('.fade').slick('refresh');
})
$(".bt button").click(function(){
    $(".banner").hide();
})