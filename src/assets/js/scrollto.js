$(document).ready(function() {
    $('.navbar-nav__menu a[href^="#"], .main-screen a[href^="#"], .free-payment__subtitle a[href^="#"]').click(function () {

        var target = $(this).attr('href');

        $('html, body').animate({scrollTop: $(target).offset().top - 100 }, 800);

        return false;
    });
});
