    var view = {
        getLocation: function() {
            if ("geolocation" in navigator) {
                /* geolocation is available */
                view.position = navigator.geolocation.getCurrentPosition(function(position) {
                    console.log(position);
                    this.initMap(position.coords.latitude, position.coords.longitude);
                });
            } else {
                // geolocation IS NOT available 
            }
        },

        init: function() {
            this.getLocation();
        },

        initMap: function(latitude, longitude) {
            var windowHeight = $(window).height();
            $('#map').height(windowHeight);

            var mapDiv = document.getElementById('map');
            var map = new google.maps.Map(mapDiv, {
                center: {
                    lat: latitude,
                    lng: longitude
                },
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            });
        }
    };

    view.init();






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
