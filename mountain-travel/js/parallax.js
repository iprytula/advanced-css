(function ($) {
  $(document).ready(function () {
    $(window).scroll(function () {
      $('.hero').css({
        'background-position-y': (window.scrollY / 2.5) + 'px'
      });
    });
  });
})(jQuery);