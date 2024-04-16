//자바

//탑메뉴
$(".navi li").mouseover(function(){
    $(".sub").stop().fadeIn();
})
$(".navi li").mouseout(function(){
    $(".sub").stop().fadeOut();
})
$(".navi li").focusin(function(){
    $(".sub").stop().fadeIn();
})
$(".navi li").focusout(function(){
    $(".sub").stop().fadeOut();
})

//슬라이드
$("#slide li").hide();
$("#slide li").eq(0).show();
var imgs = 0;
function slide(){
    if(imgs<2){imgs++;}else{imgs=0;}
    $("#slide li").fadeOut(800)
    $("#slide li").eq(imgs).fadeIn(800);
}
setInterval(slide, 2000)

//팝업
$(".cc").click(function(){
    $(".modal").show();
})
$(".bt button").click(function(){
    $(".modal").hide();
})