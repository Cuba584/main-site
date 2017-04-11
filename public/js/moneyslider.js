
var moneySliderSections = document.getElementsByClassName('money-slider-li');
var moneySlider = document.getElementById('money-slider-wrapper');
var moneySliderUl = document.getElementById('money-slider-ul');
var lastMoneySlide= moneySliderUl.lastElementChild;
var lastMoneySlideClone = lastMoneySlide.cloneNode(true);
var firstMoneySlide = moneySliderUl.firstElementChild;
var firstMoneySlideClone = firstMoneySlide.cloneNode(true);
moneySliderUl.style.width = 100 * (moneySliderSections.length + 2) + "%";
moneySliderUl.insertBefore(lastMoneySlideClone, firstMoneySlide);
moneySliderUl.appendChild(firstMoneySlideClone);
var leftMoneyButton = document.getElementById('money-slider-left-button');
var rightMoneyButton = document.getElementById('money-slider-right-button');
var moneySliderLeft = moneySliderUl.offsetLeft;
var moneySlideIndex = 0;

leftMoneyButton.addEventListener("click", function toPrevious() {
  moneySliderUl.style.transition = "0.5s left";
  moneySlideIndex --;
  if (moneySlideIndex == 0) {
    moneySliderUl.style.left = "-100%";
  } else if (moneySlideIndex == -1) {
    moneySliderUl.style.left = "0%";
    setTimeout(function() {
      moneySliderUl.style.transition = "0s left";
      moneySliderUl.style.left = (moneySliderSections.length - 2) * -100 + '%';
       moneySlideIndex = moneySliderSections.length - 3;
    }, 500);
  }
  else {
    moneySliderUl.style.left = (moneySlideIndex * -100) - 100 + '%';
  }
})
rightMoneyButton.addEventListener("click", function toNext() {
  moneySliderUl.style.transition = "0.5s left";
  console.log(moneySlideIndex);
  moneySlideIndex ++;
  if (moneySlideIndex == 0) {
    moneySliderUl.style.left = "-100%";
  }
  else if (moneySlideIndex > moneySliderSections.length - 3) {
    moneySliderUl.style.left = (moneySlideIndex * -100) - 100 + '%';
    setTimeout(function() {
      moneySliderUl.style.transition = "0s left";
      moneySliderUl.style.left = "-100%";
       moneySlideIndex = 0;
    }, 500);
  }
  else {
    moneySliderUl.style.left = (moneySlideIndex * -100) - 100 + '%';
  }

})
