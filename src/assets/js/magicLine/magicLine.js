function markerItem(elem) {
  if (window.innerWidth > 991.98) {

    elem.append("<li class='magic-line--js'></li>");
    var $marker = $(".magic-line--js");

    $marker
        .css("left", $('.current_page_item a').position().left + $('#magicLine li a').width() / 2)
        .data("origLeft", $marker.position().left);

    hoverElem($('#magicLine li a'), $marker);
    // activeMenu($('#magicLine li a'), $marker);

  }

}

function hoverElem(elem, magicLine) {
  if (window.innerWidth > 991.98) {

    elem.hover(
        function () {
          var $el = $(this);
          var leftPos = $el.position().left;
          var widthElem = $el.width();
          magicLine.stop().animate({
            left: leftPos + widthElem / 2,
          });

          elem.each(function () {
            $(".magic-line--js").addClass('active');
          });

        },

        function () {
          magicLine.stop().animate({
            left: magicLine.data("origLeft")
          });
          $(".magic-line--js").removeClass('active');
        }
    );

  }

}

// function activeMenu($elem, $marker) {
//
//
//   $elem.click(function () {
//     var leftPos = $(this).position().left;
//     var widthElem = $(this).width();
//
//     $marker.data("origLeft", leftPos + widthElem / 2);
//
//     $elem.each(function () {
//       $(this).removeClass('active');
//       $(".magic-line--js").removeClass('active');
//     });
//
//     $(this).addClass('active');
//     $(".magic-line--js").addClass('active');
//
//   })
//
// }

$(document).ready(function () {
  markerItem($('#magicLine'));
});

