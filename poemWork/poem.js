$(document).ready(function(){

  // hide element on page load
  $('#section0').css('opacity', 0);
  //section text fades in from left when 20% from top
  $('#section0').waypoint(function() {
      $('#section0').addClass('fadeInLeft');
  }, { offset: '20%' });
});

$(document).ready(function(){
  $('#section0img').css('opacity', 0);
  //section img fades in from right when 20% from top
  $('#section0img').waypoint(function(){
    $('#section0img').addClass('fadeInRight');
  }, { offset: '20%'});
});
