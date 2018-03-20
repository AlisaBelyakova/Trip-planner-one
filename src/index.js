console.log("Hello from JavaScript");
const buildMarker = require('./marker');
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYWxpc2FiZWx5YWtvdmEiLCJhIjoiY2plenN3dXkzMGZtaDJ3bzAzNm01YnNlcSJ9.eICqeU1qJf4wf74w3qNXzw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('hotels', [-74.009, 40.705]);
marker.addTo(map);