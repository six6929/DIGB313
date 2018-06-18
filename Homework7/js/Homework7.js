function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(35.5038, 128.7464),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);

  var input = /** @type {HTMLInputElement} */(document.getElementById('address'));
  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map
  });

  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    input.className = '';
    var place = autocomplete.getPlace();

    if (!place.geometry) {
      // Inform the user that the place was not found and return.
      input.className = 'notfound';
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }

    marker.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));

    //위치 등록 부분
    marker.setPosition(place.geometry.location);
    var pot = place.geometry.location;
    var x    = pot.lat().toFixed(4);
    var y    = pot.lng().toFixed(4);

    alert("x = "+x + " y = "+ y);

    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[2] && place.address_components[2].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[0] && place.address_components[0].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
  });

  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
   autocomplete.setTypes([]); // 전체 주소
}

google.maps.event.addDomListener(window, 'load', initialize);
