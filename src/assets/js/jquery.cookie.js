$(function() {
  // Проверяем запись в куках о посещении
  // Если запись есть - ничего не происходит
  if (!$.cookie('hideModal')) {
    // если cookie не установлено появится окно
    // с задержкой 5 секунд
    setTimeout("document.querySelector('.cookie').style.display='flex'", 1000);
  }

});

// Закрытие полосы cookie
$('.cookie-button').click(function(){
  $.cookie('hideModal', true, {
    // Время хранения cookie в днях
    expires: 30,
    path: '/'
  });
  $('.cookie').fadeOut();
});
