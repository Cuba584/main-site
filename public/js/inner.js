var videoTop;
var videoHeight;
$(document).ready( function(){

  videoTop = $('#video-top').offset().top;
  videoHeight = $('#vimeo-wrap').outerHeight();
  $( window ).resize(function() {
    windowWidth = $(window).width();
    videoTop = $('#video-top').offset().top;
    videoHeight = $('#vimeo-wrap').outerHeight();
    $('#replay-btn').css('top', replayVideoHeight - (replayVideoHeight*0.35));
  });
  if (windowWidth > 1020) {
  $(window).scroll(function(event){
    var scrollTop = $(this).scrollTop();


      if (scrollTop >= videoTop  - 200 && scrollTop <= videoTop + (videoHeight / 8)) {
        $('body').css('background-color', '#000')
      } else if (scrollTop > videoTop + (videoHeight / 8)) {
        $('body').css('background-color', '#fff')
      } else if (scrollTop < videoTop - 200) {
        $('body').css('background-color', '#fff')
      }
  });
} else {};
})
