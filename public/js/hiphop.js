var panels = document.querySelectorAll('.hiphop-panel');
var cards = document.querySelectorAll('.hiphop-card');
var audios = document.querySelectorAll('audio');
console.log(cards)


for (var p = 0; p < 5; p++) {
  console.log(cards[p]);
  // panels[p].addEventListener('mouseenter', function(){
          cards[p].onmouseenter = flip;
          cards[p].onmouseleave = unflip;
  // });
  // panels[p].addEventListener('mouseleave', function(){
  //         cards[p].classList.remove('flipped');
  // });
};

console.log('hello');

function flip() {
  this.classList.add("flipped");
}

function unflip() {
  //   if (audio[p].duration > 0 && !audio[p].paused) {
  this.classList.remove("flipped");
  // } else {
  //
  //     //Not playing...maybe paused, stopped or never played.
  //
  // }
}
