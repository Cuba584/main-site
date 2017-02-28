$(document).ready(function(){

var sectionId = ["#section-0", "#section-0-img", "#section-1", "#section-1-img", "#section-2", "#section-2-img", "#section-3", "#section-3-img", "#section-4", "#section-4-img", "#section-5", "#section-5-img", "#section-6", "#section-6-img"];

var rowId = ["#row-0", "#row-1", "#row-2", "#row-3", "#row-4", "#row-5", "#row-6"];

for (var i in sectionId){
  (function(i){
    var numCheck = rowId[i].substring(5);

    $(sectionId[i]).css('opacity', 0);

    if((parseInt(numCheck)%2) != 0){

      $(rowId[i]).css('background-color', '#00C4C7');

      console.log(numCheck);

    }
    ;

    if(sectionId[i].includes('img')){

      $(sectionId[i]).waypoint(function() {
          $(sectionId[i]).addClass('fadeInRight 20s');
      }, { offset: '50%' });
    }else{

      $(sectionId[i]).waypoint(function() {
          $(sectionId[i]).addClass('fadeInLeft 20s');
      }, { offset: '50%' })
    }
  })(i)
}
});
