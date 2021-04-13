$(function () {

    $(document).ready(function (e) {
        $(".header-nav li").mouseenter(function () {
            // $(".xiaomishoujiboxwrap").stop();
            $(".xiaomishoujiboxwrap").stop().slideDown(500);
        })
        $(".header-nav li").mouseout(function () {
            // $(".xiaomishoujiboxwrap").stop();
            $(".xiaomishoujiboxwrap").stop().slideUp(500);
        })
    });

    //回到顶部显示隐藏
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st >= 300) {
            $(".icon-huidaodingbu").fadeIn();
        } else {
            $(".icon-huidaodingbu").fadeOut();
        }
    });
    // 点击回到顶部
    $(".icon-huidaodingbu").click(function () {
        $("body,html").stop().animate({
            "scrollTop": 0
        }, 500);
    });
    // 新人注册显示隐藏
    $(".icon-shouji").mouseenter(function () {
        $(".newperson").show();
    }).mouseout(function () {
        $(".newperson").hide();
    });
    // 个人中心
    $(".icon-changyongicon-").mouseenter(function () {
        $(".percenter").show();
    }).mouseout(function () {
        $(".percenter").hide();
    })
    // 售后
    $(".icon-shezhi").mouseenter(function () {
        $(".shouhou").show();
    }).mouseout(function () {
        $(".shouhou").hide();
    })
    // 人工
    $(".icon-kefu").mouseenter(function () {
        $(".rengong").show();
    }).mouseout(function () {
        $(".rengong").hide();
    })
    //购物车
    $(".icon-gouwuchekong").mouseenter(function () {
        $(".gouwuche").show();
    }).mouseout(function () {
        $(".gouwuche").hide();
    })
    // 回到顶部
    $(".icon-huidaodingbu").mouseenter(function () {
        $(".top").show();
    }).mouseout(function () {
        $(".top").hide();
    })


    // 监听事件
    window.onscroll = function () {
        var topScroll = document.body.scrollTop;//滚动的距离,距离顶部的距离
        var bignav = document.getElementById("bignav");//获取到导航栏id
        if (topScroll > 250) { //当滚动距离大于250px时执行下面的东西
            bignav.style.position = 'fixed';
            bignav.style.top = '0';
            bignav.style.zIndex = '9999';
        } else {//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
            bignav.style.position = 'static';
        }
    }

    let id = location.search.split("=")[1];
    $.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
        id: id
    }).then(res => {
        console.log(res);
        let pData = res.data;
        var str = "";
        str = `
            <div class="img-left">
            <img src="${pData.pimg}" alt="">
        </div>
        <div class="product-con">
            <h2>${pData.pname}</h2>
            <p><span>「新品热卖中，购机享12期分期免息」</span>骁龙888 | 增强版UFS3.1+SSD磁盘阵列系统 | 高品质双扬声器，DXOMARK音频总分第一名 |
                120W极速闪充+4500mAh双电竞电池 | 磁动力升降肩键 | 144Hz 三星E4屏幕</p>
            <p>${pData.pdesc}</p>
            <p>${pData.pprice}</p>
            <div class="product-cart">加入购物车</div>
            <div class="like">喜欢</div>
            <div class="jiesuan">去购物车结算</div>
        </div>
        `;
        $(".product-box").html(str);
        $(".product-cart").click(function () {
            $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
                uid: 1002876,
                pid: 415672,
                pnum: 1
            }).then(res => {
                console.log(res);
            })
        })
    })
})