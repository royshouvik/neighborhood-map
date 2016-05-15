// function getlocation() {
//     if ("geolocation" in navigator) {
//         /* geolocation is available */
//         navigator.geolocation.getCurrentPosition(function(position) {
//             getrestaurents(position.coords.latitude, position.coords.longitude);
//         });
//     } else {
//          geolocation IS NOT available 
//     }
// }



// function dcoumentHeight() {
//     var windowHeight = $(window).height();
//     $('#map').height(windowHeight);
// }

// $(window).resize(dcoumentHeight);


// function AppViewModel() {
//     var self = this;
//     self.restuarents = ko.observableArray([]);

// }

// ko.applyBindings(new AppViewModel());

$.ajax({url: "https://developers.zomato.com/api/v2.1/search",
    type: "GET",
    crossDomain: true,
    headers: { 'user-key': '38c42097628d298c85e496cd81990b3a' },

        
      });
