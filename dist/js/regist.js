$(function(){var t=document.querySelector(".input2"),n=document.querySelector("span"),a=/^1(2|3|4|5|6|7|8|9)\d{9}$/;t.onchange=function(){var e=t.value;a.test(e)?n.innerText="":n.innerText="手机号码格式错误"},$("#submit").click(function(){$(".input2").val()&&""!=$(".mima").val()?$.get("http://jx.xuzhixiang.top/ap/api/reg.php",{username:$(".input2").val(),password:$(".mima").val()},e=>{console.log(e.code),1==e.code?(alert("注册成功"),location.href="login.html"):alert("注册失败")}):alert("注册失败")})});