$(document).ready(function(){

var sectionId = ["#section-0", "#section-0-img", "#section-1", "#section-1-img", "#section-2", "#section-2-img"];


for (var i in sectionId){
  (function(i){
    $(sectionId[i]).css('opacity', 0);

    if(sectionId[i].includes('img')){

      $(sectionId[i]).waypoint(function() {
          $(sectionId[i]).addClass('fadeInRight');
      }, { offset: '50%' });
    }else{

      $(sectionId[i]).waypoint(function() {
          $(sectionId[i]).addClass('fadeInLeft');
      }, { offset: '50%' })
    }
  })(i)
}
});
