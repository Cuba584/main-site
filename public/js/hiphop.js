var panels = document.querySelectorAll('.hiphop-panel');
var cards = document.querySelectorAll('.hiphop-card');
var mobileCards = document.querySelectorAll('.hiphop-card-mobile');
var audios = document.querySelectorAll('audio');

for (var m = 0; m < 5; m++) {
  mobileCards[m].onclick = toggleFlip;
}

function toggleFlip() {
  if (this.classList.contains('flipped')) {
    this.classList.remove("flipped");
  } else {
    this.classList.add("flipped");
  }
}

var hiphopSections = document.getElementsByClassName('hiphop-mobile-li');
var hiphopSlider = document.getElementById('hiphop-wrap-mobile');
var hiphopUl = document.getElementById('hiphop-ul');
var lastHiphopSlide= hiphopUl.lastElementChild;
var lastHiphopSlideClone = lastHiphopSlide.cloneNode(true);
var firstHiphopSlide = hiphopUl.firstElementChild;
var firstHiphopSlideClone = firstHiphopSlide.cloneNode(true);
hiphopUl.style.width = 100 * (hiphopSections.length + 2) + "%";
hiphopUl.insertBefore(lastHiphopSlideClone, firstHiphopSlide);
hiphopUl.appendChild(firstHiphopSlideClone);
var leftHiphopButton = document.getElementById('hiphop-left');
var rightHiphopButton = document.getElementById('hiphop-right');
var hiphopSliderLeft = hiphopUl.offsetLeft;
var hiphopSlideIndex = 0;

leftHiphopButton.addEventListener("click", function toPrevious() {
  hiphopUl.style.transition = "0.5s left";
  hiphopSlideIndex --;
  if (hiphopSlideIndex == 0) {
    hiphopUl.style.left = "-100%";
  } else if (hiphopSlideIndex == -1) {
    hiphopUl.style.left = "0%";
    setTimeout(function() {
      hiphopUl.style.transition = "0s left";
      hiphopUl.style.left = (hiphopSections.length - 2) * -100 + '%';
       hiphopSlideIndex = hiphopSections.length - 3;
    }, 500);
  }
  else {
    hiphopUl.style.left = (hiphopSlideIndex * -100) - 100 + '%';
  }
})
rightHiphopButton.addEventListener("click", function toNext() {
  hiphopUl.style.transition = "0.5s left";
  console.log(hiphopSlideIndex);
  hiphopSlideIndex ++;
  if (hiphopSlideIndex == 0) {
    hiphopUl.style.left = "-100%";
  }
  else if (hiphopSlideIndex > hiphopSections.length - 3) {
    hiphopUl.style.left = (hiphopSlideIndex * -100) - 100 + '%';
    setTimeout(function() {
      hiphopUl.style.transition = "0s left";
      hiphopUl.style.left = "-100%";
       hiphopSlideIndex = 0;
    }, 500);
  }
  else {
    hiphopUl.style.left = (hiphopSlideIndex * -100) - 100 + '%';
  }

})
