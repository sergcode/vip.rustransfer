jQuery(document).ready(($) => {
  $('.counter').counterUp({
    beginAt: 0,
    formatter(n) {
      return n.replace(/,/g, '.');
    },
  });
});
