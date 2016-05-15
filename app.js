$(function() {

    var view = {
        getLocation: function() {
            if ("geolocation" in navigator) {
                /* geolocation is available */
                this.position = navigator.geolocation.getCurrentPosition(function(position) {
                    console.log(position);
                    return position;
                });
            } else {
                // geolocation IS NOT available 
            }
        },

        init: function() {
            this.getLocation();
            this.initMap();
        },

        initMap: function() {
            var windowHeight = $(window).height();
            $('#map').height(windowHeight);

            var mapDiv = document.getElementById('map');
            var map = new google.maps.Map(mapDiv, {
                center: {
                    lat: this.position.coords.latitude,
                    lng: this.position.coords.longitude
                },
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            });
        }
    };

    view.init();


});




// function dcoumentHeight() {
//     var windowHeight = $(window).height();
//     $('#map').height(windowHeight);
// }

// $(window).resize(dcoumentHeight);


// function AppViewModel() {
//     var self = this;
//     self.restuarents = ko.observableArray([]);
//     self.position = getlocation();

// }

// ko.applyBindings(new AppViewModel());






// $.ajax({
//   type: 'GET',
//   url: "https://developers.zomato.com/api/v2.1/search?count=10",
//   contentType: 'application/json',
//   xhrFields: {
//     withCredentials: true
//   },
//   headers: {
//     'X-Zomato-API-Key' : '38c42097628d298c85e496cd81990b3a'
//   },
//   success: function() {
//     // Here's where you handle a successful response.
//     alert('success');
//   },
//   error: function() {
//   }
// });
