var videoTop;
var videoHeight;
var windowWidth;
$(document).ready( function(){
  windowWidth = $(window).width();
  videoTop = $('#video-top').offset().top;
  videoHeight = $('#vimeo-wrap').outerHeight();
  $(window).scroll(function(event){
    if (windowWidth > 1240) {
      goDark();
    }
  })
});

$( window ).resize(function() {
  windowWidth = $(window).width();
  videoTop = $('#video-top').offset().top;
  videoHeight = $('#vimeo-wrap').outerHeight();
  if (windowWidth > 1240) {
    goDark();
  } else {
    $('body').css('background-color', '#fff')
    $('p, h1, h2, h3, h4, h5, h6, #inner-title-box').css('opacity', '1')
  }
});

function goDark() {
    var scrollTop = $(this).scrollTop();
    // console.log(scrollTop)
      if (scrollTop >= videoTop - (videoHeight / 2) && scrollTop <= videoTop + (videoHeight / 10)) {
        $('body').css('background-color', '#000')
        $('p, h1, h2, h3, h4, h5, h6, #inner-title-box').css('opacity', '0')
      } else if (scrollTop > videoTop + (videoHeight / 10)) {
        $('body').css('background-color', '#fff')
        $('p, h1, h2, h3, h4, h5, h6, #inner-title-box').css('opacity', '1')
      } else if (scrollTop < videoTop - (videoHeight / 2)) {
        $('body').css('background-color', '#fff')
        $('p, h1, h2, h3, h4, h5, h6, #inner-title-box').css('opacity', '1')
      };
};
