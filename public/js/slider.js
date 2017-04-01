var sliderSections = document.getElementsByClassName('slider-section');
var slider = document.getElementById('custom-slider');
var sliderUl = document.getElementById('slider-ul');
var lastSlide= sliderUl.lastElementChild;
var lastSlideClone = lastSlide.cloneNode(true);
var firstSlide = sliderUl.firstElementChild;
var firstSlideClone = firstSlide.cloneNode(true);
sliderUl.style.width = 100 * (sliderSections.length + 2) + "%";
sliderUl.insertBefore(lastSlideClone, firstSlide);
sliderUl.appendChild(firstSlideClone);
var leftButton = document.getElementById('slider-left');
var rightButton = document.getElementById('slider-right');
var sliderLeft = sliderUl.offsetLeft;
var slideIndex = 0;

leftButton.addEventListener("click", function toPrevious() {
  sliderUl.style.transition = "0.5s left";
  slideIndex --;
  if (slideIndex == 0) {
    sliderUl.style.left = "-100%";
  } else if (slideIndex == -1) {
    sliderUl.style.left = "0%";
    setTimeout(function() {
      sliderUl.style.transition = "0s left";
      sliderUl.style.left = (sliderSections.length - 2) * -100 + '%';
       slideIndex = sliderSections.length - 3;
    }, 500);
  }
  else {
    sliderUl.style.left = (slideIndex * -100) - 100 + '%';
  }
})
rightButton.addEventListener("click", function toNext() {
  sliderUl.style.transition = "0.5s left";
  console.log(slideIndex);
  slideIndex ++;
  if (slideIndex == 0) {
    sliderUl.style.left = "-100%";
  }
  else if (slideIndex > sliderSections.length - 3) {
    sliderUl.style.left = (slideIndex * -100) - 100 + '%';
    setTimeout(function() {
      sliderUl.style.transition = "0s left";
      sliderUl.style.left = "-100%";
       slideIndex = 0;
    }, 500);
  }
  else {
    sliderUl.style.left = (slideIndex * -100) - 100 + '%';
  }

})
