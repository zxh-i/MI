// 登录答疑
$("strong").click(function () {
    $(".dayi").show();
})
$("#dayidelet").click(function () {
    $(".dayi").hide();
    console.log("a");
})

$(".denglu1").click(function () {
    $(".zhanghao").show();
    $(".saoma").hide();
    $(".denglu1").addClass("denglu");
    $(".denglu1").siblings().removeClass("denglu");
})
$(".saomadenglu").click(function () {
    $(".saoma").show();
    $(".zhanghao").hide();
    $(".saomadenglu").addClass("denglu");
    $(".saomadenglu").siblings().removeClass("denglu");
})