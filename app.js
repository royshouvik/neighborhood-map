function Venue(data) {
    this.name = data.name;
    this.location = data.location;
}

function AppViewModel() {
    var self = this;
    self.venues = ko.observableArray([]);
    self.updateHeight = function() {
        var windowHeight = $(window).height();
        $('#map').height(windowHeight);
    };

    self.initMap = function(latitude, longitude) {
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
    };

    self.loadPlaces = function(latitude, longitude) {
    	var viewmodel = this;
        var client_secret = 'WFKH2C5QEPXP30YLDAC5BOHBXEYINQT0MQ2NERLYIJZWCUCA';
        var client_id = 'BKU2W3NNYBTNGF1GDYPLCLLIR3Q3Z0JCOVKLNZHMM5VXWVZN';
        var url = 'https://api.foursquare.com/v2/venues/search';
        //client_id = & client_secret = % 20 & ll = 40.7, -74 % 20 & query = sushi
        $.ajax({
            url: url,
            data: {
                'client_id': client_id,
                'client_secret': client_secret,
                'v': '20130815',
                'limit' : 15,
                'll': latitude + ',' + longitude,
                //'query': 'restaurent'
            },
            success: function(data) {
                console.log(data);
                var mappedVenues = $.map(data.response.venues, function(item) {
                    return new Venue(item);
                });
                viewmodel.venues(mappedVenues);
            },

            error: function() {
                console.log("Error loading data");
            }
        });

    };



    self.getLocation = function(cb) {
        //var self = this;

        // Temp fix for local testing
        cb(28.4702983, 77.0152425);
        return {
        	coords : {
        		latitude: 28.4702983,
        		longitude: 77.0152425
        	}
        };


        //Uncomment below code when finalised
        // if ("geolocation" in navigator) {
        //     /* geolocation is available */
        //       return navigator.geolocation.getCurrentPosition(function(position) {
        //         console.log(position);
        //         cb(position.coords.latitude, position.coords.longitude);
        //         return position;
        //         // view.position = position;
        //         // view.initMap(position.coords.latitude, position.coords.longitude);
        //         // view.loadPlaces(position.coords.latitude, position.coords.longitude);
        //     });
        // } else {
        //     // geolocation IS NOT available 
        //     console.log("geolocation not available");            
        // }
    };

    self.position = self.getLocation(self.initMap);
    self.loadPlaces(self.position.coords.latitude, self.position.coords.longitude);




}



ko.applyBindings(new AppViewModel());
// $(window).resize(view.updateHeight);
