$(document).ready(function(){
  //save these for later in case it doesn't work in all browsers
    //window.scrollTop = 0;
    //document.body.scrollTop = 0;
    //$('html, body').scrollTop(0);
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    console.log
    $('body').css('height', (windowHeight * 1.25));
     $('#link-box').css('height', windowHeight);

    window.setTimeout(function() {
      window.scrollTo(0,0);
    }, 50);


    window.scrollTo(0, 0);

  $(window).scroll(function(){
    $('.arrow').css('display', 'none');
    var offset = $(window).scrollTop() ;

    $('.title-svg').show();

    $('.title-svg').css('opacity', offset / (windowHeight / 5));

    if (offset <= (windowHeight / 5)) {
      $('.arrow').css('display', 'block');
    }

    if (offset <= 0) {
      $('.title-svg').hide();
    }


  });

  $('.arrow').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: windowHeight / 4}, 500);
});




});
