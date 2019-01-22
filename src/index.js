const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoidmNodWRldiIsImEiOiJjanI4OGVzZWwwM2xjNDNtbXo2NnZqbHZtIn0.U997s4sQ-VmT_PVpNeO-Jw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', [-74.009151, 40.705086]);
console.log(marker);
marker.addTo(map);
const marker2 = buildMarker('hotels', [-74.01, 40.709]);
marker2.addTo(map);
const marker3 = buildMarker('restaurants', [-74.004, 40.711]);
marker3.addTo(map);
