var categorySelector = '.team-nav li';
var everyoneSelector = '#team-photos img';
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
    for (var q = 0; q < everyone.length; q++) {
      everyone[q].style.display = "none";
    };
    if (this.classList.contains('coaches')) {
      var c;
      for (c = 0; c < coaches.length; c++) {
        coaches[c].style.display = "inline-block";
      };
    }
    else if (this.classList.contains('reporters')) {
      var r;
      for (r = 0; r < reporters.length; r++) {
        reporters[r].style.display = "inline-block";
      }
    }
    else if (this.classList.contains('videographers')) {
      var v;
      for (v = 0; v < videographers.length; v++) {
        videographers[v].style.display = "inline-block";
      }
    }
    else if (this.classList.contains('developers')) {
      var dv;
      for (dv = 0; dv < developers.length; dv++) {
        developers[dv].style.display = "inline-block";
      }
    }
    else if (this.classList.contains('designers')) {
      var ds;
      for (ds = 0; ds < designers.length; ds++) {
        designers[ds].style.display = "inline-block";
      }
    }
    else if (this.classList.contains('everyone')) {
      var e;
      for (e = 0; e < everyone.length; e++) {
        everyone[e].style.display = "inline-block";
      }
    };
};

for (var i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', makeActive);
  };
