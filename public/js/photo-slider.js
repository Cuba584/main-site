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
var leftButtons = document.getElementsByClassName('slider-left');
var rightButton = document.getElementsByClassName('slider-right');
var sliderLeft = sliderUl.offsetLeft;
var slideIndex = 0;
var captionIndex = 0;
$('#inner-caption').html(captionArray[1]);



  $('.slider-left').on("click", function toPrevious() {
    sliderUl.style.transition = "0.5s left";
    slideIndex --;
    console.log(slideIndex)
    var captionIndex = slideIndex;
    if (slideIndex == 0) {
      sliderUl.style.left = "-110%";
    } else if (slideIndex == -1) {
      sliderUl.style.left = "-10%";
      setTimeout(function() {
        sliderUl.style.transition = "0s left";
        sliderUl.style.left = (sliderSections.length - 1) * -110 + '%';
         slideIndex = sliderSections.length - 2;
         console.log(slideIndex)
      }, 500);
    }
    else {
      sliderUl.style.left = (slideIndex * -110) - 110 + '%';
    }
    var currentCaption = captionArray[captionIndex +1];
    $('#inner-caption').html(currentCaption);
  })



  $('.slider-right').on("click", function toNext() {
    sliderUl.style.transition = "0.5s left";
    slideIndex ++;
    console.log(slideIndex)
    captionIndex = slideIndex;
    if (slideIndex == 0) {
      sliderUl.style.left = "-110%";
    }
    else if (slideIndex > sliderSections.length - 2) {
      sliderUl.style.left = (slideIndex * -110) - 110 + '%';
      setTimeout(function() {
        sliderUl.style.transition = "0s left";
        sliderUl.style.left = "-110%";
         slideIndex = 0;
         console.log(slideIndex);
      }, 500);
      captionIndex = 0;
    }
    else {
      sliderUl.style.left = (slideIndex * -110) - 110 + '%';
    }
    console.log(captionIndex + 1)
    var currentCaption = captionArray[captionIndex +1];
    console.log(currentCaption)
    $('#inner-caption').html(currentCaption);
  })
