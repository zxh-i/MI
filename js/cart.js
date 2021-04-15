$(function () {
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id: 1002876
    }).then(res => {
        console.log(res);
        let totalPrice = 0;
        let pData = res.data;
        let str = "";
        console.log(pData);
        for (let i = 0; i < pData.length; i++) {
            str += `
         <li id="list">
             <input type="checkbox" name="" class="single">
             <img src="${pData[i].pimg}" alt="">
             <span>${pData[i].pname}</span>
             <span class="price">${pData[i].pprice}</span>
             <span class="minus">-</span>
             <input type="text" class="num" pid="${pData[i].pid}" uid="${pData[i].uid}" value="${pData[i].pnum}">
             <span class="plus">+</span>
             <span class="siglePrice">${pData[i].pprice * pData[i].pnum}</span>
             <p class="del">X</p>
         </li>
         `;
        }
        $(".cart-product").html(str);

        // 总价
        /* for (let j = 0; j < pData.length; j++) {
            totalPrice += Number($(".siglePrice").eq(j).text());
        }
        $(".heji").text(totalPrice); */

        // 加减
        $(".plus").click(function () {
            let number = $(this).siblings(".num").val()
            $(this).siblings(".num").val(++number);
            let price = $(this).siblings(".price").text();
            $(this).siblings(".siglePrice").text(price * number);
            let uid = $(this).siblings(".num").attr("uid");
            let pid = $(this).siblings(".num").attr("pid");
            $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                uid: uid,
                pid: pid,
                pnum: number
            }, res => {
                console.log(res);
                let count = 0;
                let sum = 0;      //计数
                for (let j = 0; j < aCk.length; j++) {
                    if (aCk[j].checked) {
                        count++;
                        console.log(aCk[j]);
                        sum += Number($(".single").eq(j).siblings(".siglePrice").text());
                    }

                };
                $(".heji").text(sum);
            })

        })
        $(".minus").click(function () {
            let number = $(this).siblings(".num").val()
            if (number <= 1) {
                $(this).siblings(".num").val(1);
            } else {
                $(this).siblings(".num").val(--number);
            }
            let price = $(this).siblings(".price").text();
            $(this).siblings(".siglePrice").text(price * number);
            let uid = $(this).siblings(".num").attr("uid");
            let pid = $(this).siblings(".num").attr("pid");
            $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                uid: uid,
                pid: pid,
                pnum: number
            }, res => {
                console.log(res);
                let count = 0;
                let sum = 0;      //计数
                for (let j = 0; j < aCk.length; j++) {
                    if (aCk[j].checked) {
                        count++;
                        console.log(aCk[j]);
                        sum += Number($(".single").eq(j).siblings(".siglePrice").text());
                    }

                };
                $(".heji").text(sum);
            })

        })


        // 输入框值
        $(".num").change(function () {
            let number = $(this).val();

            let price = $(this).siblings(".price").text();
            $(this).siblings(".siglePrice").text(price * number);
            let uid = $(this).attr("uid");
            let pid = $(this).attr("pid");
            $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                uid: uid,
                pid: pid,
                pnum: number
            }, res => {
                console.log(res);
                let count = 0;
                let sum = 0;      //计数
                for (let j = 0; j < aCk.length; j++) {
                    if (aCk[j].checked) {
                        count++;
                        console.log(aCk[j]);
                        sum += Number($(".single").eq(j).siblings(".siglePrice").text());
                    }

                };
                $(".heji").text(sum);
            })
        })

        //删除
        $(".del").click(function () {
            let uid = $(this).siblings(".num").attr("uid");
            let pid = $(this).siblings(".num").attr("pid");
            $(this).parent().remove();
            $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
                uid: uid,
                pid: pid,
            }, res => {
                console.log(res);
                let count = 0;
                let sum = 0;      //计数
                for (let j = 0; j < aCk.length; j++) {
                    if (aCk[j].checked) {
                        count++;
                        console.log(aCk[j]);
                        sum += Number($(".single").eq(j).siblings(".siglePrice").text());
                    }

                };
                $(".heji").text(sum);
            })

        })
        //单选框
        let oCheckAll = document.querySelectorAll("#checkAll");  //全选
        let aCk = document.querySelectorAll(".single");          //每件商品的选框
        let aList = document.querySelectorAll("#list");

        oCheckAll[0].onclick = () => {

            for (let i = 0; i < aCk.length; i++) {
                aCk[i].checked = oCheckAll[0].checked;
            }
            let count = 0;
            let sum = 0;      //计数
            for (let j = 0; j < aCk.length; j++) {
                if (aCk[j].checked) {
                    count++;
                    console.log(aCk[j]);
                    sum += Number($(".single").eq(j).siblings(".siglePrice").text());
                }

            };
            $(".heji").text(sum);
        }

        for (let i = 0; i < aList.length; i++) {
            aCk[i].onclick = () => {
                let count = 0;
                let sum = 0;      //计数
                for (let j = 0; j < aCk.length; j++) {
                    if (aCk[j].checked) {
                        count++;
                        console.log(aCk[j]);
                        sum += Number($(".single").eq(j).siblings(".siglePrice").text());
                    }

                };
                $(".heji").text(sum);

                if (count === aCk.length) {
                    oCheckAll[0].checked = true;
                } else {
                    oCheckAll[0].checked = false;
                }
                //点击后已选中几件商品
                let oX = document.querySelector("#xuan");
                oX.innerText = count;

            }
            // 共计几件商品
            let oG = document.querySelector("#gong");
            oG.innerText = aList.length;

        }

    })
})
