---
layout: page
title: Attendee Map
menu_title: Attendee Map
menu_icon: geo-alt
permalink: /map/
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


  .counter-container {
    display: flex;
    gap: 20px;
    margin: 20px 0 30px;
    flex-wrap: wrap;
  }

  .counter-card {
    flex: 1;
    min-width: 240px;
    padding: 20px;
    border-radius: 14px;
    background: var(--card-bg, rgba(255,255,255,0.6));
    backdrop-filter: blur(12px);
    box-shadow: var(--card-shadow, 0 4px 12px rgba(0,0,0,0.1));
    text-align: center;
    transition: transform 0.2s ease;
  }
  
  .counter-card:hover {
    transform: translateY(-3px);
  }
  
  .counter-card h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .counter-card p {
    font-size: 2.2rem;
    font-weight: 700;
    margin: 12px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }
  
</style>


<!-- Attendee counter -->
<div id="registration-counters" class="counter-container">
  <div class="counter-card onsite">
    <h3>On‑site Participants</h3>
    <p id="onsite-count">0</p>
  </div>

  <div class="counter-card online">
    <h3>Online Participants</h3>
    <p id="online-count">0</p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>

<script>
  const sheetUrl = "https://docs.google.com/spreadsheets/d/1KyJKd4b5vObYCZp0PFHKnadjVDDBgff6xf8vArFqdik/export?format=csv&gid=815257154";

  fetch(sheetUrl)
    .then(response => response.text())
    .then(csv => {
      const data = Papa.parse(csv, { header: true }).data;

      let onsite = 0;
      let online = 0;

      data.forEach(row => {
        const att = row["Attendance"]?.trim();
        if (!att) return;

        if (att === "At University of Tennessee") onsite++;
        if (att === "Online") online++;
      });

      document.getElementById("onsite-count").textContent = onsite;
      document.getElementById("online-count").textContent = online;
    })
    .catch(err => console.error("Error loading registration data:", err));
</script>

<!-- Attendee map -->
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
  // --- Africa ---
  { name: "Centre de Développement des Technologies Avancées (CDTA), Algeria", coords: [36.7525, 3.04197] },
  { name: "College of Science and Technology, University of Rwanda", coords: [-1.9441, 30.0619] },
  { name: "University of Rwanda", coords: [-1.9441, 30.0619] },
  { name: "University of Ghana", coords: [5.6500, -0.1869] },
  { name: "Kwame Nkrumah University of Science and Technology", coords: [6.6745, -1.5714] },
  { name: "University of Namibia", coords: [-22.5597, 17.0658] },
  { name: "Botswana International University of Science and Technology", coords: [-21.9863, 27.2926] },
  { name: "Addis Ababa University", coords: [9.0370, 38.7613] },
  { name: "Alexandria University", coords: [31.2001, 29.9187] },

  // --- Middle East ---
  { name: "King Abdulaziz University, Jeddah, Saudi Arabia", coords: [21.4934, 39.2383] },
  { name: "Technion - Israel Institute of Technology", coords: [32.7768, 35.0231] },
  { name: "Weizmann Institute of Science", coords: [31.9070, 34.8116] },
  { name: "Qatar University", coords: [25.3752, 51.4903] },
  { name: "University of Doha for Science and Technology", coords: [25.3211, 51.4889] },
  { name: "KFUPM - King Fahd University of Petroleum and Minerals", coords: [26.3090, 50.1386] },
  { name: "Hamad Bin Khalifa University (HBKU), Qatar", coords: [25.3148, 51.4459] },

  // --- Europe ---
  { name: "TESCAN GROUP, Brno, Czech Republic", coords: [49.19694, 16.54759] },
  { name: "BeamShape, Brno, Czech Republic", coords: [49.23375, 16.57246] },
  { name: "CEITEC - Brno University of Technology", coords: [49.2267, 16.5950] },
  { name: "University of Cambridge", coords: [52.2043, 0.1149] },
  { name: "Imperial College London", coords: [51.4988, -0.1749] },
  { name: "University of Manchester", coords: [53.4668, -2.2339] },
  { name: "University of Oxford", coords: [51.7548, -1.2544] },
  { name: "Hugging Face / Oxford", coords: [51.7548, -1.2544] },
  { name: "University of Sheffield", coords: [53.3800, -1.4870] },
  { name: "UCLouvain", coords: [50.6680, 4.6144] },
  { name: "University of Antwerp", coords: [51.2300, 4.4160] },
  { name: "Austrian Academy of Sciences", coords: [48.2082, 16.3738] },
  { name: "Aalto University", coords: [60.1860, 24.8280] },
  { name: "VTT Technical Research Centre of Finland", coords: [60.1870, 24.8150] },
  { name: "University of Eastern Finland", coords: [62.6010, 29.7636] },
  { name: "University of Galway", coords: [53.2783, -9.0622] },
  { name: "University of Cádiz", coords: [36.5297, -6.2927] },
  { name: "Universidad de Valladolid", coords: [41.6523, -4.7245] },
  { name: "Università del Salento", coords: [40.3520, 18.1720] },
  { name: "Universita degli Studi Roma Tre", coords: [41.8590, 12.4700] },
  { name: "Paris-Saclay University", coords: [48.7100, 2.1700] },
  { name: "Université de Strasbourg / IPCMS-CNRS", coords: [48.5790, 7.7660] },
  { name: "Charles University, Prague", coords: [50.0875, 14.4213] },
  { name: "RWTH Aachen University", coords: [50.7780, 6.0600] },
  { name: "Australian Academy of Sciences", coords: [48.2082, 16.3738] },
  { name: "Izmir Institute of Technology", coords: [38.3220, 26.6390] },
  { name: "Montanuniversität Leoben", coords: [47.3833, 15.1000] },
  { name: "University College Dublin", coords: [53.3080, -6.2230] },
  { name: "University of Rostock", coords: [54.0924, 12.0991] },
  { name: "University of Girona", coords: [41.9831, 2.8249] },
  { name: "Max Planck Institute for Iron Research, Düsseldorf, Germany", coords: [51.23890, 6.79240] },
  { name: "Université d'Artois, France", coords: [50.4475, 2.7253] },
  { name: "TU Berlin, Germany", coords: [52.5122, 13.3264] },
  { name: "University of Silesia in Katowice, Poland", coords: [50.2590, 19.0216] },
  { name: "CETIM, France", coords: [47.9940, 0.1920] },
  { name: "INL - International Iberian Nanotechnology Laboratory, Braga, Portugal", coords: [41.5610, -8.3960] },
  { name: "DTU - Technical University of Denmark", coords: [55.7858, 12.5214] },
  { name: "DFM - Danish National Metrology Institute, Denmark", coords: [55.7850, 12.5210] },
  { name: "TU Darmstadt, Germany", coords: [49.8728, 8.6512] },
  { name: "University of Zaragoza - Advanced Microscopy Laboratory, Spain", coords: [41.6835, -0.8880] },
  { name: "CuspAI, Cambridge, United Kingdom", coords: [52.19440, 0.13359] },
  { name: "University of Groningen, Netherlands", coords: [53.21965, 6.56296] },
  { name: "Strikersoft, Sollentuna, Sweden", coords: [59.40539, 17.94564] },

  // --- Asia ---
  { name: "KAIST, South Korea", coords: [36.3725, 127.3608] },
  { name: "Seoul National University", coords: [37.4599, 126.9519] },
  { name: "Chungnam National University", coords: [36.3656, 127.3449] },
  { name: "Dankook University", coords: [37.3210, 127.1265] },
  { name: "Sungkyunkwan University", coords: [37.2939, 126.9769] },
  { name: "Incheon National University", coords: [37.3753, 126.6329] },
  { name: "National University of Singapore", coords: [1.2966, 103.7764] },
  { name: "A*STAR, Singapore", coords: [1.2990, 103.7870] },
  { name: "AMD Singapore", coords: [1.4505, 103.7950] },
  { name: "IISc CeNSE, Bangalore, India", coords: [13.0213, 77.5670] },
  { name: "IIT Bombay", coords: [19.1334, 72.9133] },
  { name: "IIT Delhi", coords: [28.5450, 77.1926] },
  { name: "IIT Kanpur", coords: [26.5123, 80.2329] },
  { name: "IIT Madras", coords: [12.9916, 80.2337] },
  { name: "IIT BHU", coords: [25.2677, 82.9913] },
  { name: "IIT Tirupati", coords: [13.6288, 79.4192] },
  { name: "IIT Kharagpur", coords: [22.3149, 87.3105] },
  { name: "IIT Hyderabad", coords: [17.5946, 78.1230] },
  { name: "IIT Guwahati", coords: [26.1878, 91.6915] },
  { name: "IIT Jammu", coords: [32.7333, 74.8500] },
  { name: "NIT Raipur", coords: [21.2497, 81.6050] },
  { name: "NIT Rourkela", coords: [22.2533, 84.9014] },
  { name: "NIT Patna", coords: [25.6208, 85.1780] },
  { name: "NIT Srinagar", coords: [34.1250, 74.8370] },
  { name: "Anna University", coords: [13.0108, 80.2350] },
  { name: "Vellore Institute of Technology", coords: [12.9692, 79.1559] },
  { name: "Jamia Millia Islamia", coords: [28.5613, 77.2802] },
  { name: "JNCASR", coords: [13.0185, 77.5700] },
  { name: "Amrita Vishwa Vidyapeetham, Coimbatore", coords: [10.9000, 76.9000] },
  { name: "Amrita Vishwa Vidyapeetham, Bengaluru", coords: [12.9716, 77.5946] },
  { name: "Sathyabama Institute of Science and Technology", coords: [12.8723, 80.2214] },
  { name: "SRM Institute of Science and Technology", coords: [12.8230, 80.0450] },
  { name: "Gayatri Vidya Parishad College of Engineering", coords: [17.7785, 83.3763] },
  { name: "Bundelkhand University", coords: [25.4484, 78.5685] },
  { name: "Rajiv Gandhi Institute of Petroleum Technology", coords: [26.9830, 81.0200] },
  { name: "Dr. Hari Singh Gour University", coords: [23.8500, 78.7500] },
  { name: "Gujarat University", coords: [23.0350, 72.5490] },
  { name: "MET Bhujbal Knowledge City", coords: [19.9975, 73.7898] },
  { name: "Jaypee Institute of Information Technology", coords: [28.6300, 77.3700] },
  { name: "Chitkara University", coords: [30.5167, 76.6572] },
  { name: "PEC Chandigarh", coords: [30.7490, 76.7580] },
  { name: "Bhilai Institute of Technology", coords: [21.1900, 81.2830] },
  { name: "Kiet Group of Institutions", coords: [28.7520, 77.4960] },
  { name: "Sister Nivedita University", coords: [22.5867, 88.4173] },
  { name: "Navsari Agricultural University", coords: [20.9467, 72.9520] },
  { name: "DSATM Bangalore", coords: [12.8440, 77.6770] },
  { name: "Institute of Science Tokyo, Japan", coords: [35.63190, 139.68540] },
  { name: "Harish Chandra Research Institute, Prayagraj, India", coords: [25.4300, 81.7700] },
  { name: "Aganitha AI, Hyderabad, India", coords: [17.4483, 78.3900] },
  { name: "Jashore University of Science and Technology, Bangladesh", coords: [23.1900, 89.2100] },
  { name: "Jiangsu University of Science and Technology, China", coords: [32.2040, 119.4550] },
  { name: "NIMS - National Institute for Materials Science, Tsukuba, Japan", coords: [36.0653, 140.1218] },
  { name: "IISER Thiruvananthapuram, India", coords: [8.5241, 76.9366] },
  { name: "Sri Venkateswara College of Engineering, Tirupati, India", coords: [13.6288, 79.4192] },
  { name: "Institute of Nano Science and Technology, Mohali, India", coords: [30.7046, 76.7179] },
  { name: "RMIT University Vietnam", coords: [10.7295, 106.6932] },
  { name: "Bahauddin Zakariya University, Pakistan", coords: [30.2550, 71.5130] },
  { name: "Bangladesh University of Engineering and Technology (BUET), Dhaka", coords: [23.7276, 90.3925] },
  { name: "PSG Institute of Advanced Studies, Coimbatore, India", coords: [11.01842, 76.97252] },

  // --- North America ---
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
  { name: "Texas A&M University", coords: [30.6150, -96.3423] },
  { name: "Applied Materials, Santa Clara, California", coords: [37.40342, -121.97589] },
  { name: "Tata Consultancy Services, Dallas, Texas", coords: [33.07053, -96.82539] },
  { name: "Unilever R&D, Trumbull, Connecticut", coords: [41.24293, -73.20066] },
  { name: "Physical Electronics, Chanhassen, Minnesota", coords: [44.8586, -93.5300] },
  { name: "Recipharm Advanced Bio, Woburn, Massachusetts", coords: [42.4793, -71.1523] },
  { name: "Lila Sciences, Cambridge, Massachusetts", coords: [42.3663, -71.0810] },
  { name: "City University of Hong Kong", coords: [22.3372, 114.1731] },
  { name: "Queen's University, Canada", coords: [44.2253, -76.4951] },
  { name: "University of Toronto", coords: [43.6629, -79.3957] },
  { name: "University of Manitoba", coords: [49.8078, -97.1325] },
  { name: "University of Ottawa", coords: [45.4231, -75.6831] },
  { name: "University of British Columbia", coords: [49.2606, -123.2460] },
  { name: "University of Exeter", coords: [50.7374, -3.5353] },
  { name: "Hawaii Pacific University", coords: [21.3099, -157.8581] },
  { name: "San Diego State University", coords: [32.7757, -117.0713] },
  { name: "Oklahoma State University", coords: [36.1257, -97.0660] },
  { name: "Arizona State University", coords: [33.4242, -111.9281] },
  { name: "UT Dallas", coords: [32.9858, -96.7501] },
  { name: "University of Tennessee Martin", coords: [36.3417, -88.8500] },
  { name: "UNC Chapel Hill", coords: [35.9049, -79.0469] },
  { name: "UC Irvine", coords: [33.6405, -117.8443] },
  { name: "Argonne National Laboratory", coords: [41.7130, -87.9830] },
  { name: "Lawrence Berkeley National Laboratory", coords: [37.8730, -122.2500] },
  { name: "Pacific Northwest National Laboratory", coords: [46.3410, -119.2780] },
  { name: "3M, Minnesota", coords: [44.95366, -93.08994] },
  { name: "Micron Technology, Boise, Idaho", coords: [43.5636, -116.1990] },
  { name: "Onsemi, Phoenix, Arizona", coords: [33.4484, -112.0740] },
  { name: "Absolics, Covington, Georgia", coords: [33.61806, -83.81776] },
  { name: "Missouri State University, Springfield, Missouri", coords: [37.1980, -93.2850] },
  { name: "Missouri University of Science and Technology, Rolla, Missouri", coords: [37.9543, -91.7730] },
  { name: "Stony Brook University, New York, USA", coords: [40.9120, -73.1230] },
  { name: "George Washington University, Washington, DC", coords: [38.8997, -77.0470] },
  { name: "Northwestern University, Evanston, Illinois", coords: [42.0565, -87.6753] },
  { name: "University of Michigan, Ann Arbor, USA", coords: [42.2780, -83.7382] },
  { name: "Western Illinois University, Macomb, Illinois", coords: [40.4668, -90.6710] },
  { name: "Tulane University, New Orleans, Louisiana", coords: [29.9406, -90.1203] },
  { name: "Florida International University, Miami, Florida", coords: [25.7570, -80.3730] },
  { name: "The Aerospace Corporation, El Segundo, California", coords: [33.9164, -118.3830] },
  { name: "Iowa State University, Ames, Iowa", coords: [42.0267, -93.6465] },
  { name: "Purdue University Fort Wayne, Indiana", coords: [41.1230, -85.1080] },
  { name: "San Jose State University, California", coords: [37.3352, -121.8811] },
  { name: "University of Wyoming, Laramie, Wyoming", coords: [41.3114, -105.5863] },
  { name: "Rensselaer Polytechnic Institute, Troy, New York", coords: [42.7302, -73.6788] },
  { name: "University of Illinois Urbana-Champaign, USA", coords: [40.1020, -88.2272] },
  { name: "Oregon State University, Corvallis, Oregon", coords: [44.5646, -123.2620] },
  { name: "Cinvestav, Mexico City, Mexico", coords: [19.5033, -99.1467] },
  { name: "University of Louisiana at Lafayette, USA", coords: [30.2130, -92.0198] },
  { name: "ArcelorMittal Global R&D, East Chicago, Indiana, USA", coords: [41.63990, -87.45463] },
  { name: "University of Virginia, Charlottesville, USA", coords: [38.03367, -78.50793] },

  // --- South America ---
  { name: "Federal University of Rio de Janeiro (UFRJ), Brazil", coords: [-22.8600, -43.2270] },
  { name: "SENAI, Brazil", coords: [-15.7934, -47.8825] },
  { name: "Universidad de Chile, Santiago, Chile", coords: [-33.4570, -70.6630] },
  { name: "Usiminas, Ipatinga, Brazil", coords: [-19.46836, -42.53603] },

  // --- Oceania ---
  { name: "Australian National University", coords: [ -35.2777, 149.1185 ] }
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
const map = L.map('map', {
  center: [20, 0],
  zoom: 2,
  minZoon: 2,
  worldCopyJump: false,
  maxBoundsViscosity: 1.0,
  maxBounds: [[-85, -180], [85, 180]],
  maxBoundsViscosity: 1.0,
  noWrap: true
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  noWrap: true,
  bounds: [[-85, -180], [85, 180]]
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
