var viewportWidth;


$(document).ready(function(){
  viewportWidth = $(window).width();
  pageVideo = document.getElementById('home-video');
  replayVideoHeight = $(pageVideo).height();
  // toggleWrapper();
});

$(window).resize(function(){
  viewportWidth = $(window).width();
  replayVideoHeight = $(pageVideo).height();
  // toggleWrapper();
});

function showReplay() {
  $('#replay-btn').show();
}

function replayVideo() {
  pageVideo.play();
  var videoOverlay = document.getElementById('video_overlay');
  var overlayClone = videoOverlay.cloneNode(true);
  videoOverlay.parentNode.replaceChild(overlayClone, videoOverlay);
  $('#replay-btn').hide();
}
