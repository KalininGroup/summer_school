---
layout: page
title: Attendee Map
menu_title: Attendee Map
menu_icon: geo-alt
permalink: /sites/
published: true
---

<style>
  /* Reduce the giant gap above the map */
  #map {
    margin-top: 0 !important;
  }

  /* Remove extra spacing inserted by the theme */
  .page-content > h1 + #map,
  .page-content > h2 + #map {
    margin-top: 0 !important;
  }

  /* Optional: tighten the whole page top padding */
  .page-content {
    padding-top: 10px !important;
  }
</style>


<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css"
/>
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css"
/>

<div id="map" style="height: 600px; margin-top: 20px;"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"></script>

<script>    
// -------------------------
// 1. Locations array
// -------------------------
const locations = [
  { name: "Centre de Développement des Technologies Avancées (CDTA), Algeria", coords: [36.7525, 3.04197] },
  { name: "College of Science and Technology, University of Rwanda", coords: [-1.9441, 30.0619] },
  { name: "University of Ghana", coords: [5.6500, -0.1869] },
  { name: "Kwame Nkrumah University of Science and Technology", coords: [6.6745, -1.5714] },
  { name: "University of Namibia", coords: [-22.5597, 17.0658] },
  { name: "Botswana International University of Science and Technology", coords: [-21.9863, 27.2926] },
  { name: "Addis Ababa University", coords: [9.0370, 38.7613] },

  { name: "King Abdulaziz University, Jeddah, Saudi Arabia", coords: [21.4934, 39.2383] },
  { name: "UFI HYDROGEN SPA, Serravalle all'Adige, Italy", coords: [45.80287, 11.01882] },

  { name: "TESCAN GROUP, Brno, Czech Republic", coords: [49.19694, 16.54759] },
  { name: "University of Cambridge", coords: [52.2043, 0.1149] },
  { name: "Imperial College London", coords: [51.4988, -0.1749] },
  { name: "University of Manchester", coords: [53.4668, -2.2339] },
  { name: "University of Oxford", coords: [51.7548, -1.2544] },
  { name: "University of Sheffield", coords: [53.3800, -1.4870] },
  { name: "UCLouvain", coords: [50.6680, 4.6144] },
  { name: "University of Antwerp", coords: [51.2300, 4.4160] },
  { name: "Austrian Academy of Sciences", coords: [48.2082, 16.3738] },
  { name: "Aalto University", coords: [60.1860, 24.8280] },
  { name: "VTT Technical Research Centre of Finland", coords: [60.1870, 24.8150] },
  { name: "CEITEC - Brno University of Technology", coords: [49.2267, 16.5950] },

  { name: "GDQ Labs, Pune, India", coords: [18.54497, 73.80735] },
  { name: "Calquity, Kolkata, India", coords: [22.57103, 88.34621] },
  { name: "KAIST, South Korea", coords: [36.3725, 127.3608] },
  { name: "Seoul National University", coords: [37.4599, 126.9519] },
  { name: "Chungnam National University", coords: [36.3656, 127.3449] },
  { name: "Dankook University", coords: [37.3210, 127.1265] },
  { name: "Sungkyunkwan University", coords: [37.2939, 126.9769] },
  { name: "National University of Singapore", coords: [1.2966, 103.7764] },
  { name: "A*STAR, Singapore", coords: [1.2990, 103.7870] },
  { name: "IISc CeNSE, Bangalore, India", coords: [13.0213, 77.5670] },
  { name: "IIT Bombay", coords: [19.1334, 72.9133] },
  { name: "IIT Delhi", coords: [28.5450, 77.1926] },
  { name: "IIT Kanpur", coords: [26.5123, 80.2329] },
  { name: "IIT Madras", coords: [12.9916, 80.2337] },
  { name: "IIT BHU", coords: [25.2677, 82.9913] },
  { name: "IIT Tirupati", coords: [13.6288, 79.4192] },
  { name: "IIT Kharagpur", coords: [22.3149, 87.3105] },
  { name: "IIT Hyderabad", coords: [17.5946, 78.1230] },
  { name: "Technion - Israel Institute of Technology", coords: [32.7768, 35.0231] },
  { name: "Weizmann Institute of Science", coords: [31.9070, 34.8116] },

  { name: "TESCAN Tempe, Arizona, USA", coords: [33.4297641, -111.954382] },
  { name: "ValueTronics International, Elgin, Illinois, USA", coords: [42.0396, -88.2812] },
  { name: "University of California San Diego", coords: [32.8801, -117.2340] },
  { name: "University of Colorado Boulder", coords: [40.0076, -105.2659] },
  { name: "University of Kentucky", coords: [38.0307, -84.5037] },
  { name: "University of Houston", coords: [29.7199, -95.3422] },
  { name: "University of Cincinnati", coords: [39.1310, -84.5160] },
  { name: "University of Pittsburgh", coords: [40.4444, -79.9532] },
  { name: "University of Texas at San Antonio", coords: [29.5830, -98.6190] },
  { name: "Penn State University", coords: [40.7982, -77.8599] },
  { name: "The Ohio State University", coords: [40.0076, -83.0300] },
  { name: "University of Arizona", coords: [32.2319, -110.9501] },
  { name: "University of Georgia", coords: [33.9480, -83.3773] },
  { name: "Johns Hopkins University", coords: [39.3299, -76.6205] },
  { name: "University of California Berkeley", coords: [37.8715, -122.2730] },
  { name: "University of Mississippi", coords: [34.3659, -89.5380] },
  { name: "University of Maryland, College Park", coords: [38.9869, -76.9426] },
  { name: "University of North Texas", coords: [33.2075, -97.1526] },
  { name: "University of Chicago", coords: [41.7897, -87.5997] },
  { name: "Carnegie Mellon University", coords: [40.4433, -79.9436] },
  { name: "Purdue University", coords: [40.4237, -86.9212] },
  { name: "West Virginia University", coords: [39.6350, -79.9540] },
  { name: "Virginia Tech", coords: [37.2296, -80.4139] },
  { name: "Stanford University", coords: [37.4275, -122.1697] },
  { name: "Caltech", coords: [34.1377, -118.1253] },
  { name: "Texas A&M University", coords: [30.6150, -96.3423] }
];

// -------------------------
// 2. Marker icons
// -------------------------
const blueIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const utkIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// -------------------------
// 3. UTK special marker object
// -------------------------
const utkMarker = {
  name: "University of Tennessee, Knoxville (Host Site)",
  coords: [35.9545, -83.9295]
};

// -------------------------
// 4. Initialize map
// -------------------------
const map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(map);

// -------------------------
// 5. Marker clustering
// -------------------------
const markers = L.markerClusterGroup({
  showCoverageOnHover: false
});

// Add all regular markers
locations.forEach(loc => {
  const marker = L.marker(loc.coords, { icon: blueIcon }).bindPopup(loc.name);
  markers.addLayer(marker);
});

// Add UTK highlighted marker
L.marker(utkMarker.coords, { icon: utkIcon })
  .bindPopup(utkMarker.name)
  .addTo(map);

map.addLayer(markers);

</script>
