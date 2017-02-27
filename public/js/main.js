/* Store the original positions */
  var positions = [];
  var cards = $('.card');
  cards.each(function(){
    //it's important to use offset because position is relative to the container, not the document
    positions.push( $(this).offset().top );
  });

  /* respond to the scroll event */
  $(window).on('scroll', function(e){
      /* get the current scroll position */
      var pos = $(window).scrollTop();

      for (var i = 0; i < cards.length; i++) {
        if( pos >= positions[i] ) {
          $(cards[i]).addClass('latched');
        } else {
          $(cards[i]).removeClass('latched');
        }
      }
  });
