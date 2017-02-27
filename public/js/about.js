var categorySelector = '.team-nav li';
var everyoneSelector = '#team-photos div';
var coachesSelector = '.coach';
var reportersSelector = '.reporter';
var videographersSelector = '.videographer';
var developersSelector = '.developer';
var designersSelector = '.designer';

var everyone = document.querySelectorAll(everyoneSelector);
var categories = document.querySelectorAll(categorySelector);
var coaches = document.querySelectorAll(coachesSelector);
var reporters = document.querySelectorAll(reportersSelector);
var videographers = document.querySelectorAll(videographersSelector);
var developers = document.querySelectorAll(developersSelector);
var designers = document.querySelectorAll(designersSelector);


var makeActive = function () {
    for (var i = 0; i < categories.length; i++) {
        categories[i].classList.remove('active');
    };

    this.classList.add('active');
    for (var i = 0; i < everyone.length; i++) {
      everyone[i].style.display = "none";
    };
    if (this.classList.contains('coaches')) {
      for (var i = 0; i < coaches.length; i++) {
        coaches[i].style.display = "inline-block";
      };
    }
    else if (this.classList.contains('reporters')) {
      for (var i = 0; i < reporters.length; i++) {
        reporters[i].style.display = "inline-block";
      }
    }
    else if (this.classList.contains('videographers')) {
      for (var i = 0; i < videographers.length; i++) {
        videographers[i].style.display = "inline-block";
      }
    }
    else if (this.classList.contains('developers')) {
      for (var i = 0; i < developers.length; i++) {
        developers[i].style.display = "inline-block";
      }
    }
    else if (this.classList.contains('designers')) {
      for (var i = 0; i < designers.length; i++) {
        designers[i].style.display = "inline-block";
      }
    }
    else if (this.classList.contains('everyone')) {
      var i;
      for (i = 0; i < everyone.length; i++) {
        everyone[i].style.display = "inline-block";
      }
    };
};

for (var i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', makeActive);
  };
