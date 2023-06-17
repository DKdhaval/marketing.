$(document).ready(function () {


    // scroll to header fixed
    $(window).scroll(function () {
        // alert()
        var s = $(window).scrollTop()
        // alert(s)
        if (s > 150) {
            $('.object').addClass('header_fixed')
            $('.bottom_box').fadeIn(700)
        }
        else {
            $('.object').removeClass('header_fixed')
            $('.bottom_box').fadeOut(200)
        }
    })

    $('.bottom_box').hide()

    $('.bottom_box').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 100)
    })

    setTimeout(function () {
        $('.loader').fadeOut(1000)
        // $('.loader').slideUp(1000)
    }, 3000)

})