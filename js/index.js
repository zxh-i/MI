$(function () {
    // 导航显示隐藏
    $(document).ready(function (e) {
        $(".header-nav .li1").mouseenter(function () {
            $("#box1").stop().slideDown(500);
        })
        $(".header-nav .li1").mouseout(function () {
            $("#box1").stop().slideUp(500);
        })
    });
    $(document).ready(function (e) {
        $(".header-nav .li2").mouseenter(function () {
            $("#box2").stop().slideDown(500);
        })
        $(".header-nav .li2").mouseout(function () {
            $("#box2").stop().slideUp(500);
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
    // 轮播上的导航
    $("#xuanka .category-item").hover(
        function () {
            $(".phonecard").show();
        },
        function () {
            $(".phonecard").hide();
        }
    );
    // 购物车
})
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
    autoplay: true,
    navigation: {
        nextEl: '#arrowright',
        prevEl: '#arrowleft',
    },
});


// 商品数据
let list = document.querySelector(".phone-r")
var oUl = []
var str = ""
$.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
    uid: 1002876
}).then(res => {
    oUl = res.data
    console.log(oUl)
    for (let id in oUl) {
        str += `
  <dl data-id=${id}>
  <a href="detail.html?id=${oUl[id].pid}">
  <dt><img src="${oUl[id].pimg}"></dt>
  <dd>
  <p>${oUl[id].pname}</p>
  <p>${oUl[id].pdesc}</p>
   <p>${oUl[id].pprice}</p>
   </dd>
   </a>
   </dl>
   `;
        console.log(id)
    }
    list.innerHTML = str;
})
console.log(list)