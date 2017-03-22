$(document).ready(function(){
  var replays = document.getElementsByClassName('replay-btn');

  $('#replay-btn').hide();

  var videoEnded = document.getElementById('cinemagraph').onended;

  if (videoEnded){
    $('#replay-btn').show();
    console.log('shown');
  };





// menu animation
$('#nav-container').on('click', function(){
  this.classList.toggle("change");
});

  $('#trans-btn').on('click', function(){

    this.classList.toggle("spanish");

    if (this.classList.value.includes("spanish")){
      this.innerHTML = "ES";
    } else {
      this.innerHTML = "EN";
    }


  });


});
