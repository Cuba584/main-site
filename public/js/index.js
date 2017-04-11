var viewportWidth;

$(document).ready(function(){
  viewportWidth = $(window).width();
  pageVideo = document.getElementById('home-video');
  replayVideoHeight = $(pageVideo).height();
  toggleWrapper();
});

$(window).resize(function(){
  viewportWidth = $(window).width();
  replayVideoHeight = $(pageVideo).height();
  toggleWrapper();
});

function toggleWrapper() {
  if (viewportWidth <= 570){
    $('.logo-wrapper').hide();
  } else {
    $('.logo-wrapper').show();
  }
}
