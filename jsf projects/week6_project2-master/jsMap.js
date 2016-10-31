// function initialize() {
//   var mapCanvas = document.getElementById('map');
//   var mapOptions = {
//     center: new google.maps.LatLng(48.887406, 2.343441),
//     zoom: 18,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   }
//   var map = new google.maps.Map(mapCanvas, mapOptions);
//
//   var mapCanvas2 = document.getElementById('map2');
//   var mapOptions2 = {
//     center: new google.maps.LatLng(51.516379, -0.237330),
//     zoom: 18,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   }
//   var map = new google.maps.Map(mapCanvas2, mapOptions2);
// }
// google.maps.event.addDomListener(window, 'load', initialize);


var map;
var marker;
function initMap() {
  var myLatLng = {lat: 39.757609, lng: -105.007005};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng,
    mapTypeControl:true,
    mapTypeControlOptions: {
      style:google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  addMarker(myLatLng, "I\'m a marker!");
}

function addMarker(location, title){
  marker = new google.maps.Marker({
    position: location,
    map: map,
    title: title
  });
}

function removeMarker(){
  marker.setMap(null)
  initMap();
}

function userInputMarker(){
    var latVal = parseFloat($(".lat").val());
    var longVal = parseFloat($(".long").val());
    var latLong = {lat: latVal, lng: longVal};
    var userLocation = $(".location").val();
    map.setCenter(latLong);

    addMarker(latLong, userLocation);
}
