window.onload = function(){
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;

    function initialize() {
        directionsDisplay = new google.maps.DirectionsRenderer();
        var poltava = new google.maps.LatLng(49.6020233, 34.4871986);
        var mapOptions = {
            zoom:7,
            center: poltava
        }
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        directionsDisplay.setMap(map);
    }

    function calcRoute() {
        var start = document.getElementsByName('pointA')[0].value;
        var end = document.getElementsByName('pointB')[0].value;
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };
  
        directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            } else {
                 window.alert('Directions request failed due to ' + status);
            }
        });
    }

    document.getElementsByName('button')[0].onclick = function() {
      calcRoute()
    };

    initialize();
};
	

	




