$(function(){$(document).ready(function(o){$(".header-nav li").mouseenter(function(){$(".xiaomishoujiboxwrap").stop().slideDown(500)}),$(".header-nav li").mouseout(function(){$(".xiaomishoujiboxwrap").stop().slideUp(500)})}),$(window).scroll(function(){300<=$(this).scrollTop()?$(".icon-huidaodingbu").fadeIn():$(".icon-huidaodingbu").fadeOut()}),$(".icon-huidaodingbu").click(function(){$("body,html").stop().animate({scrollTop:0},500)}),$(".icon-shouji").mouseenter(function(){$(".newperson").show()}).mouseout(function(){$(".newperson").hide()}),$(".icon-changyongicon-").mouseenter(function(){$(".percenter").show()}).mouseout(function(){$(".percenter").hide()}),$(".icon-shezhi").mouseenter(function(){$(".shouhou").show()}).mouseout(function(){$(".shouhou").hide()}),$(".icon-kefu").mouseenter(function(){$(".rengong").show()}).mouseout(function(){$(".rengong").hide()}),$(".icon-gouwuchekong").mouseenter(function(){$(".gouwuche").show()}).mouseout(function(){$(".gouwuche").hide()}),$(".icon-huidaodingbu").mouseenter(function(){$(".top").show()}).mouseout(function(){$(".top").hide()}),window.onscroll=function(){var o=document.body.scrollTop,n=document.getElementById("bignav");250<o?(n.style.position="fixed",n.style.top="0",n.style.zIndex="9999"):n.style.position="static"};var o=location.search.split("=")[1];$.get("http://jx.xuzhixiang.top/ap/api/detail.php",{id:o}).then(o=>{console.log(o);let n=o.data;o="",o=`
            <div class="img-left">
            <img src="${n.pimg}" alt="">
        </div>
        <div class="product-con">
            <h2>${n.pname}</h2>
            <p><span>「新品热卖中，购机享12期分期免息」</span>骁龙888 | 增强版UFS3.1+SSD磁盘阵列系统 | 高品质双扬声器，DXOMARK音频总分第一名 |
                120W极速闪充+4500mAh双电竞电池 | 磁动力升降肩键 | 144Hz 三星E4屏幕</p>
            <p>${n.pdesc}</p>
            <p>${n.pprice}</p>
            <div class="product-cart">加入购物车</div>
            <div class="like">喜欢</div>
        </div>
        `;$(".product-box").html(o),$(".product-cart").click(function(){$.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{uid:1002876,pid:n.pid,pnum:1}).then(o=>{console.log(o),location.href="http://localhost:8080/cart.html?id=pid"})})})});