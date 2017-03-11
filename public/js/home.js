$(document).ready(function(){

    $('.arrow').on('click', function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop: 3000}, 500);
    });

});

// document.querySelector('#my-video').onended = function () {
//   this.load();
//   this.play();
// };
