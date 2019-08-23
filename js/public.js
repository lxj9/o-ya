// $(".nav>ul>li").click(function() {
//                 $(this).addClass("act").siblings('li').removeClass("act");
//                 $(".nav>ul>.l1").removeClass('act');
// });
$(".nav>ul>li").click(function(){
    $(this).css({
        "backgroundColor":"red"
    });
})