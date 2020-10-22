window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
}


$(function () {
    $(".big .big-right .big-right-btn").click(function () {
        $.ajax({
            url: "http://localhost/projects/src/interface/addwq.php",
            // url: "../interface/addwq.php",
            data: {
                id: "123456",
                name: "小米10至尊纪念版8GB+128GB陶瓷熙",
                price: 5299,
                img: "../img/qpone1.jpg",
                num: 1,
            },
            success: function (res) {
                console.log(res)
                if (res.code) {
                    alert("加入成功")
                }
            },
            dataType: 'json'
        })

    })
    //点击查看购物车,进入购物车页面
    $('#cart').click(function () {
        location.href = "../pages/cart.html"
    })


})