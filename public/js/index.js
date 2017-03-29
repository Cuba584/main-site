$(document).ready(function(){
  $(window).resize(function(){
    var viewportWidth = $(window).width;

    if (viewportWidth <= 600){
      $('#mobile-container').show();
    }
  });
});
