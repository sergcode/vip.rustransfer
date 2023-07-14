$(document).ready(function () {
  if (screen.width > 375) {

    var advantagesOwl = $('.slider-advantages__owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      nav: false,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      margin: 0,
      autoplay: true,
      smartSpeed: 400,
      responsive: {
        1920: {
          items: 1

        }
      }
    });

    var advantagesOwlText = $('.slider-advantages__owl-carousel-text').owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      nav: true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      margin: 0,
      navElement: 'div',
      navText: ['<img class="prev" src="../assets/img/svg-icon/left-arrow.svg">', '<img class="next" src="../assets/img/svg-icon/right-arrow.svg">'],
      autoplay: true,
      smartSpeed: 400,
      responsive: {
        1920: {
          items: 1
        }
      }
    });

    // $('.slider-advantages').hover(
    //     function () {
    //       advantagesOwl.trigger('stop.owl.autoplay');
    //       advantagesOwlText.trigger('stop.owl.autoplay');
    //     },
    //     function () {
    //       advantagesOwl.trigger('play.owl.autoplay', [0, 400]);
    //       advantagesOwlText.trigger('play.owl.autoplay', [0, 400]);
    //     }
    // );

    var owlPrev = $('.owl-prev');
    var owlNext = $('.owl-next');
    owlPrev.click(function () {
      advantagesOwl.trigger('prev.owl.carousel');
    });
    owlNext.click(function () {
      advantagesOwl.trigger('next.owl.carousel');
    });

    var sectionAdvantages = $('.slider-advantages');
    sectionAdvantages.hover(
        function () {
          advantagesOwl.trigger('stop.owl.autoplay');
          advantagesOwlText.trigger('stop.owl.autoplay');
        },
        function () {
          advantagesOwl.trigger('play.owl.autoplay', [0, 400]);
          advantagesOwlText.trigger('play.owl.autoplay', [0, 400]);
        });
    sectionAdvantages.hover(
        function () {
          advantagesOwl.trigger('stop.owl.autoplay');
          advantagesOwlText.trigger('stop.owl.autoplay');
        },
        function () {
          advantagesOwl.trigger('play.owl.autoplay', [0, 400]);
          advantagesOwlText.trigger('play.owl.autoplay', [0, 400]);
        });

  }


});

