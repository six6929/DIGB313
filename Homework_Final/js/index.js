$(function(){
        function progressBar(target,value){
            var target ="#" + target;
            var total_w = $(".progress").width();
            var now_w = (total_w*value)/100;
            $(target + " .progress .bar").animate({width: now_w},1000,"swing");
        }
        var v= [];
        var pn =0;
        $(".pro .bar_txt").text(function(index,value){
            v[index] = value;
            return value + "%";
        })
        var progress = setInterval(function(){
            progressBar("progress"+pn,v[pn]);
            pn++;
            if(pn > $(".pro .bar_txt").length-1){
                clearInterval(progress);
            }
        },250);
    })


$(function(){
$(window).ready(function(){
var gnbA = $("#gnb li a");
var gnb_h = $("#gnb").height();
var h = new Array();
var sum = 0;
$("#content").css("margin-top",gnb_h);
$("#content > div").each(function(index){
    h[index] = sum;
    sum += $(this).height()-250;
});
$(window).scroll(function(){
    $("#content div").each(function(index){
        if($(window).scrollTop() >= h[index]){
            gnbA.removeClass("on");
            gnbA.eq(index).addClass("on");
        }
    });
})
gnbA.click(function(){
    var target = $(this).attr("href");
        $("html,body").stop().animate({scrollTop:$(target).offset().top-gnb_h},200,"swing");
    return false;
});
gnbA.eq(0).addClass("on").click();
});
})


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
          input.className = 'notfound';
          return;
        }


        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }

        marker.setIcon(/** @type {google.maps.Icon} */({
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(35, 35)
        }));

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

       autocomplete.setTypes([]);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
