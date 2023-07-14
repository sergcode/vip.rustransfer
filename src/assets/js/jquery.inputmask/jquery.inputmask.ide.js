$(document).ready(function () {

  var phonePay = $('#validationTooltipPhone');
  var emailPay = $('#validationTooltipEmail');

  var footerPhone = $('#validationPhone');
  var footerEmail = $('#validationEmail');

  $([phonePay, footerPhone]).inputmask('+7 (999) 999-9999');
  $([emailPay, footerEmail]).inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: "lower"
      }
    }
  });
});


