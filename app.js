 function dcoumentHeight() {
     var windowHeight = $(window).height();
     $('#map').height(windowHeight);
 }



 $(window).resize(dcoumentHeight);
