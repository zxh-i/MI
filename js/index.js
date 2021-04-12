//轮播1
var swiper = new Swiper('.banner1', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        autoplay: true,
    },
    navigation: {
        nextEl: '.banner1-next',
        prevEl: '.banner1-prev',
    },
});
// 轮播2
var swiper = new Swiper('.banner2', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '#arrowright',
        prevEl: '#arrowleft',
    },
});
// 导航显示隐藏
$(document).ready(function (e) {
    $(".header-nav li").mouseenter(function () {
        $(".xiaomishoujiboxwrap").stop();
        $(".xiaomishoujiboxwrap").slideDown(500);
    })
    $(".header-nav li").mouseout(function () {
        $(".xiaomishoujiboxwrap").stop();
        $(".xiaomishoujiboxwrap").slideUp(500);
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


