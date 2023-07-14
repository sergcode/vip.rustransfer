var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("is-active");
    }, false);
  });
}

$(document).ready(function () {

  $('.hamburger').on('click', function () {

    $('.bg__menu').toggleClass('active');
    $('html').toggleClass('modal-open');

  });

  $('.bg__menu').on('click', function () {

    $(this).removeClass('active');
    $('.hamburger').removeClass('is-active');
    $('html').removeClass('modal-open');

  });

});


function activeMixinMenu() {

  var $elem = $('#magicLine li a');

  $elem.click(function () {
    var bgMenu = $('.bg__menu');
    var hamburger = $('.hamburger');
    var htmlLand = $('html');
    var menuNavbar = $('.navbar-expand-lg .navbar-collapse__theme');
    $elem.each(function () {
      $(this).removeClass('active');
      $(bgMenu).removeClass('active');
      $(hamburger).removeClass('is-active');
      $(htmlLand).removeClass('modal-open');
      $(menuNavbar).removeClass('show');
    });

    $(this).addClass('active');

  })

}

$(document).ready(function () {
  activeMixinMenu();
});
