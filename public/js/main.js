// $(document).ready(function(){
//   $('.latched').fadeIn('slow');
//   /* Store the original positions */
//     var positions = [];
//     var cards = $('.card');
//     cards.each(function(){
//
//       var $this = $(this);
//
//
//
//       /* If the object is completely visible in the window, fade it it */
//
//
//       //it's important to use offset because position is relative to the container, not the document
//       positions.push( $(this).offset().top );
//
//
//     });
//
//     /* respond to the scroll event */
//     $(window).on('scroll', function(e){
//
//
//         /* get the current scroll position */
//         var pos = $(window).scrollTop();
//
//         for (var i = 0; i < cards.length; i++) {
//           // console.log(this);
//           var bottom_of_object = $(cards[i]).position().top + $(cards[i]).outerHeight();
//           var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//           if( bottom_of_window > bottom_of_object ){
          //  console.log("bottom of window is larger than bottom of object");
//             $(cards[i]).animate({'opacity':'1'},1500);
//
//           }
//
//
//
//           if( pos >= positions[i] ) {
//             //if the scroll bar is above the position of the element
//             $(cards[i]).addClass('latched');
//
//
//
//
//
//           } else {
//             $(cards[i]).removeClass('latched');
//           }
//         }
// });
//
//
//
//
// });

  AOS.init({
  duration: 1200,
  })


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
