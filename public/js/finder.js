$(document).ready(function(){
    // hide on subcategories and files on load
    $("#sub-apps, #files-apps, #apps-info").hide();
    $("#sub-music, #files-music, #files-musicvids, #music-info").hide();
    $("#sub-series, #files-series, #series-info").hide();
    $("#sub-sport, #files-sport, #sports-info").hide();
    $("#sub-tube, #files-tube, #tube-info").hide();

    // MOBILE hide on subcategories and files on load
    $("#sub-apps-mobile, #files-apps-mobile, #apps-info-mobile").hide();
    $("#sub-music-mobile, #files-music-mobile, #files-musicvids-mobile, #music-info-mobile").hide();
    $("#sub-series-mobile, #files-series-mobile, #series-info-mobile").hide();
    $("#sub-sport-mobile, #files-sport-mobile, #sports-info-mobile").hide();
    $("#sub-tube-mobile, #files-tube-mobile, #tube-info-mobile").hide();




    //click Applications, hide others
    $("#applications").click(function(){
      $(this).addClass("active");
      $("#music, #series, #sports, #youtube").removeClass("active");
      $("#sub-apps").show();

      $("#intro-info, #sub-music, #files-music, #files-musicvids, #sub-series, #files-series, #sub-sport, #files-sport, #sub-tube, #files-tube").hide();

    });

    $("#android").click(function(){
      $(this).addClass("active");
      $("#files-apps").show();
    });

    //click Music, hide others
    $("#music").click(function(){
      $(this).addClass("active");
      $("#applications, #series, #sports, #youtube").removeClass("active");
      $("#sub-music").show();

      $("#intro-info, #sub-apps, #files-apps, #sub-series, #files-series, #sub-sport, #files-sport, #sub-tube, #files-tube").hide();

    });
    $("#international").click(function(){
      $(this).addClass("active");
      $("#music-vids").removeClass("active");
      $("#files-music").show();
      $("#files-musicvids").hide();
    });
    $("#music-vids").click(function(){
      $(this).addClass("active");
      $("#international").removeClass("active");
      $("#files-musicvids").show();
      $("#files-music").hide();
    });

    //click Series, hide others
    $("#series").click(function(){
      $(this).addClass("active");
        $("#music, #applications, #sports, #youtube").removeClass("active");
      $("#sub-series").show();

      $("#intro-info, #sub-apps, #files-apps, #sub-music, #files-music, #files-musicvids, #sub-sport, #files-sport, #sub-tube, #files-tube").hide();

    });

    // click Sports, hide others
    $("#sports").click(function(){
      $(this).addClass("active");
      $("#music, #series, #applications, #youtube").removeClass("active");
      $("#sub-sport").show();

      $("#intro-info, #sub-apps, #files-apps, #sub-series, #files-series, #sub-music, #files-music, #files-musicvids, #sub-tube, #files-tube").hide();
    });
    $("#soccer").click(function(){
      $("#files-sport").show();
      $(this).addClass("active");
    });

    //click Youtube, hide others
    $("#youtube").click(function(){
      $(this).addClass("active");
      $("#music, #series, #sports, #applications").removeClass("active");
      $("#sub-tube").show();
      $("#intro-info, #sub-apps, #files-apps, #sub-series, #files-series, #sub-sport, #files-sport, #sub-music, #files-music, #files-musicvids").hide();
    });
    $("#fashion").click(function(){
      $(this).addClass("active");
      $("#files-tube").show();
    });

    //remove active when exiting branch
    $(".category-container li").click(function(){
      $(".sub-container li").removeClass("active");
    });



    //show and hide info
    $("#applications").click(function(){
      $("#apps-info").show();
      $("#music-info, #series-info, #sports-info, #tube-info").hide();
    });

    $("#music").click(function(){
      $("#music-info").show();
      $("#apps-info, #series-info, #sports-info, #tube-info").hide();
    });

    $("#series").click(function(){
      $("#series-info").show();
      $("#apps-info, #music-info, #sports-info, #tube-info").hide();
    });

    $("#sports").click(function(){
      $("#sports-info").show();
      $("#apps-info, #series-info, #music-info, #tube-info").hide();
    });

    $("#youtube").click(function(){
      $("#tube-info").show();
      $("#apps-info, #series-info, #sports-info, #music-info").hide();
    });


});



// Mobile JS


  //Music Mobile
  $("#music-mobile").click(function(){
    $(this).toggleClass("active");
    $("#sub-music-mobile").toggle();
  });

    $("#international-mobile").click(function(){
      $(this).toggleClass("active");
      $("#files-music-mobile").toggle();
    });

    $("#music-vids-mobile").click(function(){
      $(this).toggleClass("active");
      $("#files-musicvids-mobile").toggle();
    });

  //Applications Mobile
  $("#apps-mobile").click(function(){
    $(this).toggleClass("active");
    $("#sub-apps-mobile").toggle();
  });

  $("#android-mobile").click(function(){
    $(this).toggleClass("active");
    $("#files-apps-mobile").toggle();
  });

  //Series Mobile
  $("#series-mobile").click(function(){
    $(this).toggleClass("active");
    $("#sub-series-mobile").toggle();
  });

  // Sports Mobile
  $("#sports-mobile").click(function(){
    $(this).toggleClass("active");
    $("#sub-sport-mobile").toggle();
  });
  $("#soccer-mobile").click(function(){
    $("#files-sport-mobile").toggle();
    $(this).toggleClass("active");
  });

  //Youtube mobile
  $("#tube-mobile").click(function(){
    $(this).toggleClass("active");
    $("#sub-tube-mobile").toggle();
  });
  $("#fashion-mobile").click(function(){
    $(this).toggleClass("active");
    $("#files-tube-mobile").toggle();
  });


  //show and hide info MOBILE
  $("#apps-mobile").click(function(){
    $("#apps-info").show();
    $("#music-info, #series-info, #sports-info, #tube-info, #intro-info").hide();
  });

  $("#music-mobile").click(function(){
    $("#music-info").show();
    $("#apps-info, #series-info, #sports-info, #tube-info, #intro-info").hide();
  });

  $("#series-mobile").click(function(){
    $("#series-info").show();
    $("#apps-info, #music-info, #sports-info, #tube-info, #intro-info").hide();
  });

  $("#sports-mobile").click(function(){
    $("#sports-info").show();
    $("#apps-info, #series-info, #music-info, #tube-info, #intro-info").hide();
  });

  $("#tube-mobile").click(function(){
    $("#tube-info").show();
    $("#apps-info, #series-info, #sports-info, #music-info, #intro-info").hide();
  });
