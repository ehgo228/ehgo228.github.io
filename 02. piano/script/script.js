//자바

//메뉴
$(".navi li").mouseover(function(){
    $(this).find(".sub").stop().fadeIn();
})
$(".navi li").mouseout(function(){
    $(this).find(".sub").stop().fadeOut();
})
$(".navi li").focusin(function(){
    $(this).find(".sub").stop().fadeIn();
})
$(".navi li").focusout(function(){
    $(this).find(".sub").stop().fadeOut();
})


//슬라이드
var imgs = 0;
function slide(){
    if(imgs<2){imgs++;}else{imgs=0;}
    $("#slide ul").animate({left: -100 * imgs + "%"}, 1000)
}
setInterval(slide, 2500)

//팝업
$(".cc").click(function(){
    $(".modal").show();
})
$(".bt button").click(function(){
    $(".modal").hide();
})