$(document).ready(function(){
  //save these for later in case it doesn't work in all browsers
    //window.scrollTop = 0;
    //document.body.scrollTop = 0;
    //$('html, body').scrollTop(0);
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    console.log(windowHeight)


    console.log
    $('body').css('height', (windowHeight * 1.55));
     $('#link-box').css('height', windowHeight);

    //Chrome set the scrollbar to top on load
    //(only works about half the time)
    window.setTimeout(function() {
      window.scrollTo(0,0);
    }, 50);

    //all other browsers scrollbar to top on load
    window.scrollTo(0, 0);


  $(window).scroll(function(){
    $('.arrow').css('display', 'none');
    var offset = $(window).scrollTop() ;
    console.log(offset)
    console.log(offset / (windowHeight / 5))
    $('.title-svg').show();
    //subtracting from bodyHeight to allow space for #link-box to enter before reaching bottom of page

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
