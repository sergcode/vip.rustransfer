$(document).ready(function(){
  $('.events-service__owl-carousel').owlCarousel({
    items: 7,
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
      320:{
        items:1,
        stagePadding: 100
      },
      380:{
        items:2,
        stagePadding: 70
      },
      480:{
        items:3,
        stagePadding: 50
      },
      575:{
        items:3,
        stagePadding: 50
      },
      768:{
        items:5,
        stagePadding: 70
      },
      992:{
        items:5
      },
      1570:{
        items:7
      }
    }
  })
});
