$(document).ready(function(){
  //save these for later in case it doesn't work in all browsers
    //window.scrollTop = 0;
    //document.body.scrollTop = 0;
    //$('html, body').scrollTop(0);

    //Chrome set the scrollbar to top on load
    //(only works about half the time)
    window.setTimeout(function() {
      window.scrollTo(0,0);
    }, 50);

    //all other browsers scrollbar to top on load
    window.scrollTo(0, 0);


  $(window).scroll(function(){
    $('.arrow').css('display', 'none');

    var windowHeight = $(window).height();

    //Get the current vertical position of the scroll bar
    var scrollPosition = $(window).scrollTop() ;

    var svgHeight = $('.title-svg').height();
    var bodyHeight = $('body').height() - svgHeight;

    $('.title-svg').show();
    //subtracting from bodyHeight to allow space for #link-box to enter before reaching bottom of page
    $('.title-svg').css('opacity', scrollPosition / (bodyHeight-1000));

    //if title svg is shown...
    if ($('.title-svg').css('opacity') >= 1){

      //...start showing link box.
      $('#link-box').css('display', 'flex');

      //translateScroll calculates how much space is left to scroll on the page in px
      var translateScroll = (scrollPosition/bodyHeight)*1000;
      if (translateScroll >= 720){
        //set height to whatever position occurs first (depending on speed of scroll)
        //that is >= 720px, which is ~ when #link-box aligns correctly
        $('body').height() == translateScroll;

        //get the current y translation out of the transform matrix
        var currTrans = $('.flex-item').css('-webkit-transform').split(/[()]/)[1];
        var posy = currTrans.split(',')[5];

        //if the y transformation doesn't reach the appropriate position on the page...
        //(cutting off the box)
        if (posy > -715){
          console.log('it didnt make it');
          //...set the transformation to where it should be.
          $('.flex-item').css('-webkit-transform', 'translate(0px,-712.5px)' )
        }
        return;

      } else {
        //default translation of the .flex-items as the page scrolls
        $('.flex-item').css('-webkit-transform', 'translate(0px,-' + translateScroll + 'px)' );
      }



    };





  })



});
