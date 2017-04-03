var videoTop;
var videoHeight;
var windowWidth;
$(document).ready( function(){
  windowWidth = $(window).width();
  videoTop = $('#video-top').offset().top;
  videoHeight = $('#vimeo-wrap').outerHeight();
  $('#replay-btn').css('top', replayVideoHeight - (replayVideoHeight*0.35));
  if (windowWidth > 1020) {
    goDark();
  }
});

$( window ).resize(function() {
  windowWidth = $(window).width();
  videoTop = $('#video-top').offset().top;
  videoHeight = $('#vimeo-wrap').outerHeight();
  $('#replay-btn').css('top', replayVideoHeight - (replayVideoHeight*0.35));
  if (windowWidth > 1020) {
    goDark();
  } else {
    $('body').css('background-color', '#fff')

  }
});

function goDark() {
    var scrollTop = $(this).scrollTop();
      if (scrollTop >= videoTop  - 200 && scrollTop <= videoTop + (videoHeight / 8)) {
        $('body').css('background-color', '#000')
      } else if (scrollTop > videoTop + (videoHeight / 8)) {
        $('body').css('background-color', '#fff')
      } else if (scrollTop < videoTop - 200) {
        $('body').css('background-color', '#fff')
      };
};

$(window).scroll(function(event){
  if (windowWidth > 1020) {
    goDark();
  }
})
