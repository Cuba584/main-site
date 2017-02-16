$(document).ready(function(){

var sectionId = ["#section0", "#section0img"];


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
