$(function (){
    $(window).on('load', function(){
        $('.preloader').fadeOut(100);
    })
    $(window).on('scroll', function(){
        var scrollSize = $(window).scrollTop();

        if (scrollSize > 500){
            $('#backtotop').fadeIn(400)
        } else {
            $('#backtotop').fadeOut(400)
        }
        if (scrollSize > 60){
            $('#header').addClass('menu-fixed')
        } else {
            $('#header').removeClass('menu-fixed')
        }
       
})

$('#backtotop').on('click', function () {
    $('html, body').animate({
        scrollTop:0,
    })
})
})