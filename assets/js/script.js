
$(document).ready(function () {
    // Navbar scroll effect
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.main-navbar').addClass('scrolled');
        } else {
            $('.main-navbar').removeClass('scrolled');
        }
    });

    // Scroll down to properties
    $('.scroll-icon').click(function () {
        $('html, body').animate({
            scrollTop: $('#properties').offset().top
        }, 800);
    });

});

