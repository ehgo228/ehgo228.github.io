//자바

//메뉴
$(".navi li").mouseover(function(){
    $(".sub, .bg").stop().slideDown();
})
$(".navi li").mouseout(function(){
    $(".sub, .bg").stop().slideUp();
})
$(".navi li").focusin(function(){
    $(".sub, .bg").stop().slideDown();
})
$(".navi li").focusout(function(){
    $(".sub, .bg").stop().slideUp();
})

//슬라이드
$("#slide li").hide();
$("#slide li").eq(0).show();
var imgs = 0;
function slide(){
    if(imgs<2){imgs++;}else{imgs=0;}
    $("#slide li").fadeOut(800);
    $("#slide li").eq(imgs).fadeIn(800);
}
setInterval(slide,3000)

//탭메뉴
var tab = 0;
$(".tab li").click(function(){
    $(".tab li").removeClass("on")
    $(this).addClass("on");

    tab=$(this).index();
    $(".con").hide();
    $(".con").eq(tab).show();
    return false();
})

//팝업
$(".cc").click(function(){
    $(".modal").show();
})
$(".bt button").click(function(){
    $(".modal").hide();
})