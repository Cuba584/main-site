var videoTop, videoHeight, videoTop2, videoHeight2;
var windowWidth;
$(document).ready( function(){
  windowWidth = $(window).width();

  updateVideoPositions();

  $(window).scroll(function(event){
    if (windowWidth > 1250) {
      console.log(goDark(videoTop, videoHeight));
      goDark(videoTop, videoHeight) || goDark(videoTop2, videoHeight2);
    }
  })
});


$( window ).resize(function() {
  windowWidth = $(window).width();
  updateVideoPositions();

  if (windowWidth > 1250) {
    goDark(videoTop, videoHeight) || goDark(videoTop2, videoHeight2);
  } else {
    $('body').css('background-color', '#fff')
    $('p, h1, h2, h3, h4, h5, h6, #inner-title-box').css('opacity', '1')
  }
});

function goDark(top, height) {
    var scrollTop = $(this).scrollTop();
  //   console.log(scrollTop)
  //  console.log(top+", "+height);
      if (scrollTop >= top - (height / 2) && scrollTop <= top + (height / 10)) {
        $('body').css('background-color', '#000')
        $('p, h1, h2, h3, h4, h5, h6, #inner-title-box').css('opacity', '0')
        return true;
      } else if (scrollTop > top + (height / 10)) {
        $('body').css('background-color', '#fff')
        $('p, h1, h2, h3, h4, h5, h6, #inner-title-box').css('opacity', '1')
        return false;
      } else if (scrollTop < top - (height / 2)) {
        $('body').css('background-color', '#fff')
        $('p, h1, h2, h3, h4, h5, h6, #inner-title-box').css('opacity', '1')
        return false;
      };
      return true;
};

var updateVideoPositions = function(){
  videoTop = $('#video-top').offset().top;
  videoHeight = $('#vimeo-wrap').outerHeight();
  videoTop2 = $('#video-top2').offset().top;
  videoHeight2 = $('#vimeo-wrap2').outerHeight();
};
