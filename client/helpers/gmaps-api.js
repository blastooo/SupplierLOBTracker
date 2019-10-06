var getGoogleMaps = function(address) {
  // Set initial location to middle of the US
  var initLocation = {lat: 39.50, lng: -98.35};

  // Create map object centered at initial location
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: initLocation
  });

  var request = {
    query: address,
    fields: ['geometry'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
                    map: map,
                    position: place[0].geometry.location,
                    animation: google.maps.Animation.DROP
                });
      map.setCenter(place[0].geometry.location);
    }
  });
};

module.exports.getGoogleMaps = getGoogleMaps;
