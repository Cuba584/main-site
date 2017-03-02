$(document).ready(function(){
  //save these for later in case it doesn't work in all browsers
    //window.scrollTop = 0;
    //document.body.scrollTop = 0;
    //$('html, body').scrollTop(0);
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();


  //  console.log(windowHeight);
    $('body').css('height', (windowHeight * 2));
    $('#link-box').css('top', windowHeight);
    $('#title-svg-full').attr('viewBox', '0 0 1366 ' + (windowHeight * 2));
     $('#svg-backing').attr('height', windowHeight * 2);
     $('#svg-backing').attr('width', windowWidth * 2);

  //   $('#link-box').css('top', windowHeight);

  //  $('#index-container').css('max-height', windowHeight);
    //$('#my-video').css('max-height', windowHeight);
  //  console.log(windowHeight);
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
  //  console.log(offset);
    var body_height = $('body').height() - $('.title-svg').height();
  //  console.log($('.title-svg').height())
  //  console.log(body_height);
//  console.log((offset / (windowHeight / 5))*(windowHeight / 5.89))

    //console.log(offset)
    var svg_height = $('.title-svg').height();
    // var svg_height_image = $('#svg-image').height();
    var index_height = $('#index-container').height();
    // var fillerHeight = windowHeight - svg_height_image;
  //  $('#svg-backing').attr('height', 1800);
    // $('.backing').css('top', svg_height_image);
    // console.log(svg_height_image);
      //  $('.backing').css('height', fillerHeight);
    $('.title-svg').show();
    // $('.backing').show();
    //console.log(body_height);
    $('.title-svg').css('opacity', offset / (windowHeight / 5));
  //  console.log(offset / (windowHeight / 5));
    // $('.backing').css('opacity', offset / (body_height-1000));
    if (offset <= (windowHeight / 4)) {
      $('.arrow').css('display', 'block');
    }

    //console.log($('.title-svg').css('opacity'));

    if ($('.title-svg').css('opacity') >= 1){
      //console.log("done!")

      $('#link-box').css('display', 'block');

      //console.log((offset/body_height)*1000);
      // if ((offset/body_height)*1000 >= 720){
      //   $('body').height() == (offset/body_height)*1000;
      //
      //   var currTrans = $('#link-box div').css('-webkit-transform').split(/[()]/)[1];
      // //  console.log(currTrans);
      //   var posx = currTrans.split(',')[5];
      //  console.log(currTrans);
       //console.log(posx);
        // if (posx > -715){
        //   console.log('it didnt make it');
        //   $('#link-box div').css('-webkit-transform', 'translate(0px,-712.5px)' )
        // }
        // return;

    //  } else {
      //  console.log('hello')
        //console.log((offset / body_height)*1000)
      //  console.log((offset / body_height)*1000);
        //console.log((offset / (windowHeight / 5))*266);
        console.log((offset / (windowHeight / 5)))
      //  $('#link-box').css('-webkit-transform', 'translate(0px,-' + (((offset / (windowHeight / 5))*(windowHeight/7))) + 'px)' );
        $('#link-box').css('-webkit-transform', 'translate(0px,-' + (((offset / (windowHeight / 5))*(windowHeight/9.5))) + 'px)' );
    //  }



    };





  })



});
