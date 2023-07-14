$(document).ready(function(){
    $('.how-order__owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        margin: 20,
        center: false,
        autoWidth: false,
        mouseDrag: true,
        navElement: 'div',
        navText: ['<img src="../assets/img/svg-icon/left-arrow.svg">', '<img src="../assets/img/svg-icon/right-arrow.svg">'],
        autoplay: false,
        autoplayHoverPause: true,
        smartSpeed: 600,
        touchDrag: true,
        responsive:{
            1920:{
                items:1
            }
        }
    })
});

