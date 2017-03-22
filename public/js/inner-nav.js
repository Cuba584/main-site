// credit: http://jsfiddle.net/mdesdev/wdDsk/

(function($) {
$(document).ready(function(){
  var ost = 0;

  $(window).scroll(function() {
    var cOst = $(this).scrollTop();

    // console.log("cost: " + cOst);

    if(cOst > ost) {
       $('header').addClass('fixed').removeClass('default');
      //  console.log("ost: " + ost)
    }
    else {
       $('header').addClass('default').removeClass('fixed');
    }

    ost = cOst;
  });})


})(jQuery);
