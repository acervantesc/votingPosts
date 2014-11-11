var map = L.map('map').setView([40.68025, -74.00155], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);




// get extenal geojson

function popUp(feature,layer){



    layer.bindPopup(feature.properties.name);
  }

var geojsonLayer = new L.GeoJSON.AJAX("./js/data.json", {onEachFeature:popUp});
 


geojsonLayer.addTo(map);


//listeners for place button hovers
$('.place').hover(function(){
	// console.log(this);
	$(this).toggleClass('hover');
},function(){
	$(this).toggleClass('hover');
});
