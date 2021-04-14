$(function () {
    var oInput = document.querySelector(".input2");
    var oSpan = document.querySelector("span");
    var tellReg = /^1(2|3|4|5|6|7|8|9)\d{9}$/;
    oInput.onchange = function () {
        var val = oInput.value;
        if (tellReg.test(val)) {
            oSpan.innerText = "";
        } else {
            oSpan.innerText = "手机号码格式错误";
        }
    }


    $("#submit").click(function () {
        if ($(".input2").val() && $(".mima").val() != "") {
            $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
                username: $(".input2").val(),
                password: $(".mima").val(),
            }, res => {
                console.log(res.code);
                if (res.code == 1) {
                    alert("注册成功")
                    location.href = "login.html";
                } else {
                    alert("注册失败")
                }

            })

        } else {
            alert("注册失败")
        }


    })
})