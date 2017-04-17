var internet_sliderSections = document.getElementsByClassName('internet-slider-section');
var internet_slider = document.getElementById('internet-slider');
var internet_sliderUl = document.getElementById('internet-slider-ul');
var internet_lastSlide = internet_sliderUl.lastElementChild;
var internet_lastSlideClone = internet_lastSlide.cloneNode(true);
var internet_firstSlide = internet_sliderUl.firstElementChild;
var internet_firstSlideClone = internet_firstSlide.cloneNode(true);
internet_sliderUl.style.width = 100 * (internet_sliderSections.length + 2) + "%";
internet_sliderUl.insertBefore(internet_lastSlideClone, internet_firstSlide);
internet_sliderUl.appendChild(internet_firstSlideClone);
var internet_leftButtons = document.getElementById('internet-slider-left');
var internet_rightButton = document.getElementById('internet-slider-right');
var internet_sliderLeft = internet_sliderUl.offsetLeft;
var internet_slideIndex = 0;


  $('#internet-slider-left').on("click", function toPrevious() {
    internet_sliderUl.style.transition = "0.5s left";
    internet_slideIndex --;
    if (internet_slideIndex == 0) {
      internet_sliderUl.style.left = "-100%";
    } else if (internet_slideIndex == -1) {
      internet_sliderUl.style.left = "0%";
      setTimeout(function() {
        internet_sliderUl.style.transition = "0s left";
        internet_sliderUl.style.left = (internet_sliderSections.length - 2) * -100 + '%';
         internet_slideIndex = internet_sliderSections.length - 3;
      }, 500);
    }
    else {
      internet_sliderUl.style.left = (internet_slideIndex * -100) - 100 + '%';
    }
  })



  $('#internet-slider-right').on("click", function toNext() {
    internet_sliderUl.style.transition = "0.5s left";
    internet_slideIndex ++;
    if (internet_slideIndex == 0) {
      internet_sliderUl.style.left = "-100%";
    }
    else if (internet_slideIndex > internet_sliderSections.length - 3) {
      internet_sliderUl.style.left = (internet_slideIndex * -100) - 100 + '%';
      setTimeout(function() {
        internet_sliderUl.style.transition = "0s left";
        internet_sliderUl.style.left = "-100%";
         internet_slideIndex = 0;
      }, 500);
    }
    else {
      internet_sliderUl.style.left = (internet_slideIndex * -100) - 100 + '%';
    }

  })
