$(document).ready(function(){
  //save these for later in case it doesn't work in all browsers
    //window.scrollTop = 0;
    //document.body.scrollTop = 0;
    //$('html, body').scrollTop(0);
    var windowHeight = $(window).height();
    var svg_height_image = $('.title-svg img').height();
    var fillerHeight = windowHeight - svg_height_image;
    $('.filler').css('height', fillerHeight);

    $(window).resize(function() {
      if(windowHeight != $(window).height()) {
        location.reload();
        return;
      }
    })

    window.setTimeout(function() {
      window.scrollTo(0,0);
    }, 50);


    window.scrollTo(0, 0);

  $(window).scroll(function(){
    $('.arrow').css('display', 'none');
    var offset = $(window).scrollTop() ;
    var body_height = $('body').height() - $('.title-svg').height();
    var svg_height = $('.title-svg').height();
    $('.title-svg').show();

    $('.title-svg').css('opacity', offset / (body_height-1000));

    //console.log($('.title-svg').css('opacity'));

    if ($('.title-svg').css('opacity') >= 1){
      //console.log("done!")

      $('#link-box').css('display', 'flex');
      //console.log((offset/body_height)*1000);
      if ((offset/body_height)*1000 >= 720){
        $('body').height() == (offset/body_height)*1000;

        var currTrans = $('#link-box div').css('-webkit-transform').split(/[()]/)[1];
        var posx = currTrans.split(',')[5];
    //    console.log(currTrans);
    //    console.log(posx);
        if (posx > -715){
    //      console.log('it didnt make it');
          $('#link-box div').css('-webkit-transform', 'translate(0px,-712.5px)' )
        }
        return;

      } else {
        $('#link-box div').css('-webkit-transform', 'translate(0px,-' + (offset / body_height)*1000 + 'px)' );
      }



    };





  })



});
