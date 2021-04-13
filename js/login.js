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

$(function () {
    $("#login").click(function () {
        if ($("#username").val() && $("#password").val()) {
            $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
                username: $("#username").val(),
                password: $("#password").val(),
            }, res => {
                console.log(res)
                if (res.code == 1) {
                    alert("登录成功")
                    location.href = "index.html";
                } else {
                    alert("用户名或密码不正确")
                }
            })
        } else {
            alert("用户名或密码不能为空")
        }
    })
})
