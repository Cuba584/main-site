var viewportWidth;

$(document).ready(function(){
  viewportWidth = $(window).width();
  toggleWrapper();
});

$(window).resize(function(){
  viewportWidth = $(window).width();
  toggleWrapper();
});

function toggleWrapper() {
  if (viewportWidth <= 570){
    $('.logo-wrapper').hide();
  } else {
    $('.logo-wrapper').show();
  }
}
