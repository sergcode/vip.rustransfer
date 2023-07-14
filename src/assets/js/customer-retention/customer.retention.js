function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

var alertwin = getCookie("alertwin");
if (alertwin !== "no") {
  var closeModal = $(".close");
  $(document).mouseleave(function (e) {
    if (e.clientY < 0) {
      $(".customer-retention").css({'z-index' : '100000001', 'visibility' : 'visible'}).addClass('show').removeAttr('aria-hidden').attr('aria-modal', 'true');
      $(".modal-backdrop_customer").css({'visibility' : 'visible', 'z-index' : '100000000'});
      var date = new Date;
      date.setDate(date.getDate() + 1);
      document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();
    }
  });

  $(function () {
    $(closeModal).click(function () {
      $(".customer-retention").fadeOut().removeClass('show').attr('aria-hidden', 'true');
      $(".modal-backdrop_customer").fadeOut();
      setTimeout(function () {
        $('.customer-retention').remove();
        $('.modal-backdrop').remove();
      }, 500);
    });

    // Клик по фону, но не по окну.
    $('.customer-retention').click(function(e) {
      if ($(e.target).closest('.modal-dialog').length === 0) {
        $(this).fadeOut().removeClass('show').attr('aria-hidden', 'true');
        $(".modal-backdrop_customer").fadeOut();
        setTimeout(function () {
          $('.customer-retention').remove();
          $('.modal-backdrop_customer').remove();
        }, 500);
      }
    });
  });

  // Закрытие по клавише Esc.
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".customer-retention").fadeOut().removeClass('show').attr('aria-hidden', 'true');
      $(".modal-backdrop.fade.show").fadeOut();
      setTimeout(function () {
        $('.customer-retention').remove();
        $('.modal-backdrop.fade.show').remove();
      }, 500);
    }
  });
}



