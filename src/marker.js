const mapboxgl = require("mapbox-gl");


let marker =  (long, lat) => {
  let pic1 = 'http://i.imgur.com/WbMOfMl.png'
  let pic2 = 'http://i.imgur.com/D9574Cu.png'
  let pic3 = 'http://i.imgur.com/cqR6pUI.png'
  const marker = document.createElement("div");
  marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

  new mapboxgl.Marker(markerDomEl).setLngLat([long,lat]).addTo(map);

}
