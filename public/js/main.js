$(document).ready(function(){
  //save these for later in case it doesn't work in all browsers
    //window.scrollTop = 0;
    //document.body.scrollTop = 0;
    //$('html, body').scrollTop(0);
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    console.log
    $('body').css('height', (windowHeight * 2));
    $('#link-box').css('top', windowHeight);
    $('#title-svg-full').attr('viewBox', '0 0 1366 ' + (windowHeight * 2));
     $('#svg-backing').attr('height', windowHeight * 2);
     $('#svg-backing').attr('y', 300);
     $('#svg-backing').attr('width', windowWidth * 2);

    // $(window).resize(function() {
    //   if(windowHeight != $(window).height()) {
    //     location.reload();
    //     return;
    //   }
    // })

    window.setTimeout(function() {
      window.scrollTo(0,0);
    }, 50);


    window.scrollTo(0, 0);

  $(window).scroll(function(){
    $('.arrow').css('display', 'none');
    var offset = $(window).scrollTop() ;
    var body_height = $('body').height() - $('.title-svg').height();

    var svg_height = $('.title-svg').height();

    var index_height = $('#index-container').height();

    $('.title-svg').show();

    $('.title-svg').css('opacity', offset / (windowHeight / 5));

    if (offset <= (windowHeight / 4)) {
      $('.arrow').css('display', 'block');
    }


    if ($('.title-svg').css('opacity') >= 1){

      $('#link-box').css('display', 'block');


      if (windowWidth/windowHeight <= 1) {
        $('#link-box').css('-webkit-transform', 'translate(0px,-' + (((offset / (windowHeight / 5))*(windowHeight/6.5))-(windowWidth/15)+100) + 'px)' );
      } else {
        $('#link-box').css('-webkit-transform', 'translate(0px,-' + (((offset / (windowHeight / 5))*(windowHeight/9.5))) + 'px)' );

      }



    };





  })



});
