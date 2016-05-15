var view = {
    getLocation: function() {
        var self = this;
        if ("geolocation" in navigator) {
            /* geolocation is available */
            view.position = navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position);
                self.position = position;
                self.initMap(position.coords.latitude, position.coords.longitude);
                self.loadEateries(position.coords.latitude, position.coords.longitude);
            });
        } else {
            // geolocation IS NOT available 
        }
    },

    loadEateries: function(latitude, longitude) {
        $.ajax({
            type: 'GET',
            url: "https://developers.zomato.com/api/v2.1/search?count=10",
            contentType: 'application/json',
            xhrFields: {
                withCredentials: true
            },
            data: {
                lat: latitude,
                lon: longitude
            },
            headers: {
                'X-Zomato-API-Key': '38c42097628d298c85e496cd81990b3a'
            },
            success: function(data) {
                // Here's where you handle a successful response.
                console.log(data);
            },
            error: function() {}
        });

    },

        init: function() {
        this.getLocation();
        this.updateHeight();

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
    },

    updateHeight: function() {
        var windowHeight = $(window).height();
        $('#map').height(windowHeight);
    }

};
view.init();
$(window).resize(view.updateHeight);


function eatery(data) {
    this.name = data.name;
}

function AppViewModel() {
    var self = this;
    self.eateries = ko.observableArray([]);
    self.view = view;


}

ko.applyBindings(new AppViewModel());
