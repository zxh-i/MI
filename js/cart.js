$(function () {
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id: 1002876
    }).then(res => {
        console.log(res);
    })
})