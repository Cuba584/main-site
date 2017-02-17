$(document).ready(function(){

var sectionId = ["#section0", "#section0img", "#section1", "#section1img", "#section2", "#section2img"];


for (var i in sectionId){
  (function(i){
    $(sectionId[i]).css('opacity', 0);

    if(sectionId[i].includes("img")){

      $(sectionId[i]).waypoint(function() {
          $(sectionId[i]).addClass('fadeInRight');
      }, { offset: '50%' });
      console.log('LEFT')
    }else{

      $(sectionId[i]).waypoint(function() {
          $(sectionId[i]).addClass('fadeInLeft');
      }, { offset: '50%' });
      console.log('RIGHT')
    }
  })(i)
}
});
