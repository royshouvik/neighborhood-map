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
                'll': latitude +',' + longitude
            },
            success : function (data) {
            	console.log(data);
            }, 

            error : function () {
            	console.log("Error loading data");
            }
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
