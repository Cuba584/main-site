$(document).ready(function(){



  $('<span class="country-ratio">31/100</span>').appendTo($('#cuba-title'));
  $('<span class="country-ratio">75/100</span>').appendTo($('#other-country-title'));



  var selectedCountry = $('#country-dropdown').selected;
  var globalData;
  var globalKeyedData;
  const total = 100;

  //default country settings
  var setDefault = function(globalKeyedData, countryName, elementId){


    for (var i=0; i<100; i++){
      var ratio = globalKeyedData[countryName].internet_rounded;



      if (i<=ratio){
        $('<i class="fa fa-male fa-2x selected"></i>').appendTo($(elementId));
      } else {
        $('<i class="fa fa-2x fa-male"></i>').appendTo($(elementId));
      }
    }

  }



  $.getJSON( "../data/internet.json", function( data ) {
    globalData = data;
  });

  $.getJSON("../data/internet-keyed.json", function(data){
    globalKeyedData = data;
    setDefault(globalKeyedData, "United States", "#other-country");
    setDefault(globalKeyedData, "Cuba", "#cuba");
  });







  //determind selected country
  $('#country-dropdown').on("change", function(){
    var dropd = $('#country-dropdown');
    var selectedCountry = this.value;
    changeInfo(selectedCountry);
  })

  var changeInfo = function(country){
    console.log(country);
    console.log(globalKeyedData);
    $('#other-country-title').empty();
    // $('<h3>' + country + '</h3>').appendTo($('#other-country-title'));
    $('<span class="country-ratio">' + globalKeyedData[country].internet_rounded + "/" + total + '</span>').appendTo($('#other-country-title'));
    $('#other-country').empty();

    for (var i=0; i<100; i++){
      var ratio = globalKeyedData[country].internet_rounded;
      console.log(ratio);

      if (i<=ratio){
        $('<i class="fa fa-male fa-2x selected"></i>').appendTo($('#other-country'));
      } else {
        $('<i class="fa fa-2x fa-male"></i>').appendTo($('#other-country'));
      }
    }
  } //changeInfo



}); //doc-ready
