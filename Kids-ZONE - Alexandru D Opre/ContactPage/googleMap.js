var myCenter = new google.maps.LatLng(51.606126, 0.044806);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp);

    var title = "Kids-ZONE Headquarters";

    var marker = new google.maps.Marker({
        position: myCenter,
        title: title
    });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);