// credit: http://jsfiddle.net/mdesdev/wdDsk/

(function($) {

  var ost = 0;

  $(window).scroll(function() {
    var cOst = $(this).scrollTop();

    if(cOst > ost) {
       $('header').addClass('fixed').removeClass('default');
    }
    else {
       $('header').addClass('default').removeClass('fixed');
    }

    ost = cOst;
  });

})(jQuery);
