var internet_sliderSections = document.getElementsByClassName('internet-slider-section');
var internet_slider = document.getElementById('internet-slider');
var internet_sliderUl = document.getElementById('internet-slider-ul');
var internet_lastSlide = internet_sliderUl.lastElementChild;
var internet_lastSlideClone = internet_lastSlide.cloneNode(true);
var internet_firstSlide = internet_sliderUl.firstElementChild;
var finternet_irstSlideClone = internet_firstSlide.cloneNode(true);
internet_sliderUl.style.width = 100 * (sliderSections.length + 2) + "%";
internet_sliderUl.insertBefore(internet_lastSlideClone, internet_firstSlide);
internet_sliderUl.appendChild(internet_firstSlideClone);
var internet_leftButtons = document.getElementsByClassName('slider-left');
var internet_rightButton = document.getElementsByClassName('slider-right');
var internet_sliderLeft = internet_sliderUl.offsetLeft;
var internet_slideIndex = 0;


  $('.slider-left').on("click", function toPrevious() {
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



  $('.slider-right').on("click", function toNext() {
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
