$(document).ready(function(){

var sectionId = ["#section-0", "#section-0-img", "#section-1", "#section-1-img", "#section-2", "#section-2-img", "#section-3", "#section-3-img", "#section-4", "#section-4-img", "#section-5", "#section-5-img", "#section-6", "#section-6-img"];
var poemWindowWidth = $(window).width();
$( window ).resize(function() {
  var poemWindowWidth = $(window).width();
});

$(".poem").hide();

$(".expand-collapse").click(function(){
  $(".poem").toggle();

$(this).html(function(i, v) {
  return v === '<i class="fa fa-chevron-up"></i> Hide the poem' ? '<i class="fa fa-chevron-down"></i> Read the poem' : '<i class="fa fa-chevron-up"></i> Hide the poem'
})

  for (var i in sectionId){
    console.log('for...');
    (function(i){

      if(sectionId[i].includes('img')){

        $(sectionId[i]).waypoint(function() {
          if (poemWindowWidth > 520) {
            $(sectionId[i]).addClass('fadeInLeft 20s');
          }else{
            $(sectionId[i]).addClass('fadeIn 20s');
          }
        }, { offset: '60%' });
      }else{

        $(sectionId[i]).waypoint(function() {
          if (poemWindowWidth > 520) {
            $(sectionId[i]).addClass('fadeInRight 20s');
          }else{
            $(sectionId[i]).addClass('fadeIn 20s');
          }
        }, { offset: '60%' })
      }
    })(i)

  }
});

$(".expand-collapse2").click(function(){
  $(".poem").hide();
  $(".expand-collapse").html(function(i, v) {
    return v === '<i class="fa fa-chevron-up"></i> Hide the poem' ? '<i class="fa fa-chevron-down"></i> Read the poem' : '<i class="fa fa-chevron-up"></i> Hide the poem'
  })
  
});
});
