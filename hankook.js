$(function(){

    //메인 비주얼 슬라이드
    $(".main_visual li:gt(0)").hide();
    setInterval(function(){
        $(".main_visual li:first-child").fadeOut()
        .next("li").fadeIn()
        .end().appendTo(".main_visual ul");},3000);

    //드롭메뉴

    $(".nav_menu")

    
})
