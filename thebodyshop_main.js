$(function(){
    // 팝업창 없애기
    $("#popup_close").click(function(){
        $("#popup").hide();
    })

    //메인 비주얼 슬라이드
    $(".main_visual li:gt(0)").hide();
    setInterval(function(){
        $(".main_visual li:first-child").fadeOut()
        .next("li").fadeIn()
        .end().appendTo(".main_visual ul");},3000);

    //탑버튼 
    $("#top_btn").click(function(){
        scrollTo(0,0);
    })

    $(document).ready(function(){
        $('.main_visual').slick({
            setting-name: setting-value  
        });
    });
    // $('.main_slide_img').slick();
})
