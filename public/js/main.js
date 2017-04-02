$(document).ready(function(){
  // $('#hidden-nav').hide();
  var windowWidth = $(window).width();
  $( window ).resize(function() {
    var windowWidth = $(window).width();
  });
  var videoTop = $('#video-top').offset().top;
  var videoHeight = $('#vimeo-wrap').outerHeight();

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
} else {}


  $(currentNav).addClass('active-nav');
  $(mobileNav).addClass('mobile-active-nav');

  $('#menu-toggle').click(function(){
    // $('#hidden-nav').show();
    document.getElementById("hidden-nav").style.width = "100%";
  });

  // menu animation
  $('#nav-container').on('click', function(){
    this.classList.toggle("change");
    $('#hidden-nav').show();
    $('#nav-container').hide();

  });

  $('#hidden-nav').on('click', function (){
    $('#nav-container').show();
  });

  $('#closebtn').click(function(){

    document.getElementById("hidden-nav").style.width = "0%";
    $('#nav-container')[0].classList.remove("change");
    // $('#hidden-nav').hide();
  });


  var replays = document.getElementsByClassName('replay-btn');

  $('#replay-btn').hide();

  var videoEnded = document.getElementById('cinemagraph').onended;

  if (videoEnded){
    $('#replay-btn').show();
  };



  $('#trans-btn').on('click', function(){

    this.classList.toggle("spanish");

    if (this.classList.value.includes("spanish")){
      this.innerHTML = "ES";
    } else {
      this.innerHTML = "EN";
    }


  });


});
