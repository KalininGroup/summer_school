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
  { name: "Addis Ababa University, Addis Ababa, Ethiopia", coords: [9.0370, 38.7613] },
  { name: "AIMS Research and Innovation Centre, Kigali, Rwanda", coords: [-1.94410, 30.06190] },
  { name: "Alexandria University, Alexandria, Egypt", coords: [31.2001, 29.9187] },
  { name: "Botswana International University of Science and Technology, Palapye, Botswana", coords: [-21.9863, 27.2926] },
  { name: "Centre de Développement des Technologies Avancées (CDTA), Algiers, Algeria", coords: [36.7525, 3.04197] },
  { name: "College of Science and Technology, University of Rwanda, Kigali, Rwanda", coords: [-1.9441, 30.0619] },
  { name: "Kwame Nkrumah University of Science and Technology, Kumasi, Ghana", coords: [6.6745, -1.5714] },
  { name: "University of Ghana, Accra, Ghana", coords: [5.6500, -0.1869] },
  { name: "University of Namibia, Windhoek, Namibia", coords: [-22.5597, 17.0658] },
  { name: "University of Rwanda, Kigali, Rwanda", coords: [-1.9441, 30.0619] },
  { name: "Kwame Nkrumah University of Science and Technology (KNUST), Kumasi, Ghana", coords: [6.67463, -1.57143] },

  // --- Middle East ---
  { name: "Egypt-Japan University of Science and Technology (E-JUST), New Borg El Arab, Egypt", coords: [30.91803, 29.31703] },
  { name: "Hamad Bin Khalifa University (HBKU), Doha, Qatar", coords: [25.3148, 51.4459] },
  { name: "KAUST - King Abdullah University of Science and Technology, Thuwal, Saudi Arabia", coords: [22.30943, 39.10303] },
  { name: "KFUPM - King Fahd University of Petroleum and Minerals, Dhahran, Saudi Arabia", coords: [26.3090, 50.1386] },
  { name: "King Abdulaziz University, Jeddah, Saudi Arabia", coords: [21.4934, 39.2383] },
  { name: "Middle East Technical University (METU), Ankara, Türkiye", coords: [39.89303, 32.77803] },
  { name: "Qatar University, Doha, Qatar", coords: [25.3752, 51.4903] },
  { name: "Technion - Israel Institute of Technology, Haifa, Israel", coords: [32.7768, 35.0231] },
  { name: "University of Doha for Science and Technology, Doha, Qatar", coords: [25.3211, 51.4889] },
  { name: "Weizmann Institute of Science, Rehovot, Israel", coords: [31.9070, 34.8116] },

  // --- Europe ---
  { name: "Aalto University, Espoo, Finland", coords: [60.1860, 24.8280] },
  { name: "Austrian Academy of Sciences, Vienna, Austria", coords: [48.2082, 16.3738] },
  { name: "BeamShape, Brno, Czech Republic", coords: [49.23375, 16.57246] },
  { name: "CEITEC - Brno University of Technology, Brno, Czech Republic", coords: [49.2267, 16.5950] },
  { name: "CETIM, France", coords: [47.9940, 0.1920] },
  { name: "Charles University, Prague, Czech Republic", coords: [50.0875, 14.4213] },
  { name: "CuspAI, Cambridge, United Kingdom", coords: [52.19440, 0.13359] },
  { name: "DFM - Danish National Metrology Institute, Denmark", coords: [55.7850, 12.5210] },
  { name: "DTU - Technical University of Denmark, Denmark", coords: [55.7858, 12.5214] },
  { name: "Friedrich Schiller University Jena, Jena, Germany", coords: [50.92713, 11.58923] },
  { name: "Hugging Face, Oxford, United Kingdom", coords: [51.7548, -1.2544] },
  { name: "Imperial College London, London, United Kingdom", coords: [51.4988, -0.1749] },
  { name: "INL - International Iberian Nanotechnology Laboratory, Braga, Portugal", coords: [41.5610, -8.3960] },
  { name: "Istituto Italiano di Tecnologia (IIT), Milan, Italy", coords: [45.46495, 9.19155] },
  { name: "Izmir Institute of Technology, Izmir, Turkey", coords: [38.3220, 26.6390] },
  { name: "Jozef Stefan Institute, Ljubljana, Slovenia", coords: [46.05003, 14.48803] },
  { name: "Lehrstuhl für Angewandte Physik, Erlangen, Germany", coords: [49.59603, 11.00403] },
  { name: "Linköping University, Linköping, Sweden", coords: [58.39739, 15.57603] },
  { name: "Materials Science Institute of Madrid (ICMM-CSIC), Madrid, Spain", coords: [40.40653, -3.83503] },
  { name: "Max Planck Institute for Iron Research, Düsseldorf, Germany", coords: [51.23890, 6.79240] },
  { name: "Montanuniversität Leoben, Leoben, Austria", coords: [47.3833, 15.1000] },
  { name: "MPIKG - Max Planck Institute of Colloids and Interfaces, Potsdam, Germany", coords: [52.39403, 13.02103] },
  { name: "Paris-Saclay University, France", coords: [48.7100, 2.1700] },
  { name: "RWTH Aachen University, Aachen, Germany", coords: [50.7780, 6.0600] },
  { name: "Saft, Levallois-Perret, France", coords: [48.89303, 2.28703] },
  { name: "Stockholm University, Stockholm, Sweden", coords: [59.36576, 18.05832] },
  { name: "Strikersoft, Sollentuna, Sweden", coords: [59.40539, 17.94564] },
  { name: "TESCAN GROUP, Brno, Czech Republic", coords: [49.19694, 16.54759] },
  { name: "TU Berlin, Germany", coords: [52.5122, 13.3264] },
  { name: "TU Darmstadt, Germany", coords: [49.8728, 8.6512] },
  { name: "UCLouvain, Ottignies-Louvain-la-Neuve, Belgium", coords: [50.6680, 4.6144] },
  { name: "Universidad de Valladolid, Valladolid, Spain", coords: [41.6523, -4.7245] },
  { name: "Universita degli Studi Roma Tre, Rome, Italy", coords: [41.8590, 12.4700] },
  { name: "Università del Salento, Lecce, Italy", coords: [40.3520, 18.1720] },
  { name: "Universitat de Barcelona, Barcelona, Spain", coords: [41.38693, 2.16603] },
  { name: "Universitat Politècnica de Catalunya (UPC), Barcelona, Spain", coords: [41.38739, 2.11309] },
  { name: "Université d'Artois, France", coords: [50.4475, 2.7253] },
  { name: "Université de Strasbourg / IPCMS-CNRS, Strasbourg, France", coords: [48.5790, 7.7660] },
  { name: "University College Dublin, Dublin, Ireland", coords: [53.3080, -6.2230] },
  { name: "University of Antwerp, Antwerp, Belgium", coords: [51.2300, 4.4160] },
  { name: "University of Cádiz, Cádiz, Spain", coords: [36.5297, -6.2927] },
  { name: "University of Cambridge, Cambridge, United Kingdom", coords: [52.2043, 0.1149] },
  { name: "University of Catania, Catania, Italy", coords: [37.50793, 15.08303] },
  { name: "University of Eastern Finland, Joensuu, Finland", coords: [62.6010, 29.7636] },
  { name: "University of Exeter, Exeter, United Kingdom", coords: [50.7374, -3.5353] },
  { name: "University of Galway, Galway, Ireland", coords: [53.2783, -9.0622] },
  { name: "University of Girona, Girona, Spain", coords: [41.9831, 2.8249] },
  { name: "University of Groningen, Netherlands", coords: [53.21965, 6.56296] },
  { name: "University of Manchester, Manchester, United Kingdom", coords: [53.4668, -2.2339] },
  { name: "University of Oxford, Oxford, United Kingdom", coords: [51.7548, -1.2544] },
  { name: "University of Rostock, Rostock, Germany", coords: [54.0924, 12.0991] },
  { name: "University of Sheffield, Sheffield, United Kingdom", coords: [53.3800, -1.4870] },
  { name: "University of Silesia in Katowice, Katowice, Poland", coords: [50.2590, 19.0216] },
  { name: "University of Zaragoza - Advanced Microscopy Laboratory, Zaragoza, Spain", coords: [41.6835, -0.8880] },
  { name: "VTT Technical Research Centre of Finland, Espoo, Finland", coords: [60.1870, 24.8150] },
  { name: "Helmholtz Zentrum Hereon, Geesthacht, Germany", coords: [53.43563, 10.37743] },
  { name: "Institut Català de Nanociència i Nanotecnologia (ICN2), Bellaterra, Spain", coords: [41.50063, 2.10643] },
  { name: "KTH Royal Institute of Technology, Stockholm, Sweden", coords: [59.34763, 18.07343] },
  { name: "Technical University Darmstadt, Darmstadt, Germany", coords: [49.87263, 8.65243] },
  { name: "University of Bologna, Bologna, Italy", coords: [44.49463, 11.34343] },

  // --- Asia ---
  { name: "A*STAR, Singapore, Singapore", coords: [1.2990, 103.7870] },
  { name: "Aganitha AI, Hyderabad, India", coords: [17.4483, 78.3900] },
  { name: "AMD Singapore, Singapore, Singapore", coords: [1.4505, 103.7950] },
  { name: "Amrita Vishwa Vidyapeetham, Bengaluru, India", coords: [12.9716, 77.5946] },
  { name: "Amrita Vishwa Vidyapeetham, Coimbatore, India", coords: [10.9000, 76.9000] },
  { name: "Anna University, Chennai, India", coords: [13.0108, 80.2350] },
  { name: "Bahauddin Zakariya University, Multan, Pakistan", coords: [30.2550, 71.5130] },
  { name: "Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh", coords: [23.7276, 90.3925] },
  { name: "Bhilai Institute of Technology, Durg, India", coords: [21.1900, 81.2830] },
  { name: "Bundelkhand University, Jhansi, India", coords: [25.4484, 78.5685] },
  { name: "Chitkara University, Rajpura, India", coords: [30.5167, 76.6572] },
  { name: "Chulalongkorn University, Bangkok, Thailand", coords: [13.73857, 100.53213] },
  { name: "Chungnam National University, Daejeon, South Korea", coords: [36.3656, 127.3449] },
  { name: "City University of Hong Kong, Hong Kong, China", coords: [22.3372, 114.1731] },
  { name: "Dankook University, Yongin, South Korea", coords: [37.3210, 127.1265] },
  { name: "Dr. Hari Singh Gour University, Sagar, India", coords: [23.8500, 78.7500] },
  { name: "DSATM Bangalore, Bengaluru, India", coords: [12.8440, 77.6770] },
  { name: "Gayatri Vidya Parishad College of Engineering, Visakhapatnam, India", coords: [17.7785, 83.3763] },
  { name: "Gazi University, Ankara, Türkiye", coords: [39.93903, 32.82303] },
  { name: "Gujarat University, Ahmedabad, India", coords: [23.0350, 72.5490] },
  { name: "Harish Chandra Research Institute, Prayagraj, India", coords: [25.4300, 81.7700] },
  { name: "Hunan University, Changsha, Hunan, China", coords: [28.18003, 112.94503] },
  { name: "IISc CeNSE, Bangalore, India", coords: [13.0213, 77.5670] },
  { name: "IISER Thiruvananthapuram, Thiruvananthapuram, India", coords: [8.5241, 76.9366] },
  { name: "IIT BHU, Varanasi, India", coords: [25.2677, 82.9913] },
  { name: "IIT Bombay, Mumbai, India", coords: [19.1334, 72.9133] },
  { name: "IIT Delhi, New Delhi, India", coords: [28.5450, 77.1926] },
  { name: "IIT Gandhinagar, Gandhinagar, Gujarat, India", coords: [23.21563, 72.63693] },
  { name: "IIT Guwahati, Guwahati, India", coords: [26.1878, 91.6915] },
  { name: "IIT Hyderabad, Hyderabad, India", coords: [17.5946, 78.1230] },
  { name: "IIT Jammu, Jammu, India", coords: [32.7333, 74.8500] },
  { name: "IIT Kanpur, Kanpur, India", coords: [26.5123, 80.2329] },
  { name: "IIT Kharagpur, Kharagpur, India", coords: [22.3149, 87.3105] },
  { name: "IIT Madras, Chennai, India", coords: [12.9916, 80.2337] },
  { name: "IIT Tirupati, Tirupati, India", coords: [13.6288, 79.4192] },
  { name: "Incheon National University, Incheon, South Korea", coords: [37.3753, 126.6329] },
  { name: "Institute of Nano Science and Technology, Mohali, India", coords: [30.7046, 76.7179] },
  { name: "Institute of Science Tokyo, Tokyo, Japan", coords: [35.63190, 139.68540] },
  { name: "Jamia Millia Islamia, New Delhi, India", coords: [28.5613, 77.2802] },
  { name: "Jashore University of Science and Technology, Jashore, Bangladesh", coords: [23.1900, 89.2100] },
  { name: "Jawaharlal Nehru University, New Delhi, Delhi, India", coords: [28.54023, 77.16603] },
  { name: "Jaypee Institute of Information Technology, Noida, India", coords: [28.6300, 77.3700] },
  { name: "Jiangsu University of Science and Technology, Zhenjiang, China", coords: [32.2040, 119.4550] },
  { name: "JNCASR, Bengaluru, India", coords: [13.0185, 77.5700] },
  { name: "KAIST, Daejeon, South Korea", coords: [36.3725, 127.3608] },
  { name: "Kiet Group of Institutions, Ghaziabad, India", coords: [28.7520, 77.4960] },
  { name: "Maulana Azad National Institute of Technology (MANIT), Bhopal, India", coords: [23.21523352082949, 77.40995358674715] },
  { name: "MET Bhujbal Knowledge City, Nashik, India", coords: [19.9975, 73.7898] },
  { name: "National University of Singapore, Singapore, Singapore", coords: [1.2966, 103.7764] },
  { name: "Navsari Agricultural University, Navsari, India", coords: [20.9467, 72.9520] },
  { name: "NIMS - National Institute for Materials Science, Tsukuba, Japan", coords: [36.0653, 140.1218] },
  { name: "NIT Karnataka (NITK Surathkal), Mangaluru, Karnataka, India", coords: [13.01083, 74.79233] },
  { name: "NIT Patna, Patna, India", coords: [25.6208, 85.1780] },
  { name: "NIT Raipur, Raipur, India", coords: [21.2497, 81.6050] },
  { name: "NIT Rourkela, Rourkela, India", coords: [22.2533, 84.9014] },
  { name: "NIT Srinagar, Srinagar, India", coords: [34.1250, 74.8370] },
  { name: "Pakistan Institute of Engineering and Applied Sciences (PIEAS), Islamabad, Pakistan", coords: [33.69443, 73.01703] },
  { name: "PEC Chandigarh, Chandigarh, India", coords: [30.7490, 76.7580] },
  { name: "PSG Institute of Advanced Studies, Coimbatore, India", coords: [11.01842, 76.97252] },
  { name: "Rajiv Gandhi Institute of Petroleum Technology, Jais, India", coords: [26.9830, 81.0200] },
  { name: "RMIT University Vietnam, Ho Chi Minh City, Vietnam", coords: [10.7295, 106.6932] },
  { name: "Sathyabama Institute of Science and Technology, Chennai, India", coords: [12.8723, 80.2214] },
  { name: "Seoul National University, Seoul, South Korea", coords: [37.4599, 126.9519] },
  { name: "Sister Nivedita University, Kolkata, India", coords: [22.5867, 88.4173] },
  { name: "Sri Venkateswara College of Engineering, Tirupati, India", coords: [13.6288, 79.4192] },
  { name: "SRM Institute of Science and Technology, Chennai, India", coords: [12.8230, 80.0450] },
  { name: "Sungkyunkwan University, Suwon, South Korea", coords: [37.2939, 126.9769] },
  { name: "The University of Tokyo, Tokyo, Japan", coords: [35.71263, 139.76103] },
  { name: "University of Sindh, Jamshoro, Pakistan", coords: [25.42603, 68.26703] },
  { name: "Vellore Institute of Technology, Vellore, India", coords: [12.9692, 79.1559] },
  { name: "IIT Jodhpur, Karwar, Rajasthan, India", coords: [26.47163, 73.11443] },

  // --- North America ---
  { name: "3M, Saint Paul, Minnesota, United States", coords: [44.95366, -93.08994] },
  { name: "Absolics, Covington, Georgia, United States", coords: [33.61806, -83.81776] },
  { name: "Applied Materials, Santa Clara, California, United States", coords: [37.40342, -121.97589] },
  { name: "ArcelorMittal Global R&D, East Chicago, Indiana, United States", coords: [41.63990, -87.45463] },
  { name: "Argonne National Laboratory, Lemont, Illinois, United States", coords: [41.7130, -87.9830] },
  { name: "Arizona State University, Tempe, Arizona, United States", coords: [33.4242, -111.9281] },
  { name: "Baylor University, Waco, Texas, United States", coords: [31.54930, -97.11400] },
  { name: "Caltech, Pasadena, California, United States", coords: [34.1377, -118.1253] },
  { name: "Carnegie Mellon University, Pittsburgh, Pennsylvania, United States", coords: [40.4433, -79.9436] },
  { name: "Cinvestav, Mexico City, Mexico", coords: [19.5033, -99.1467] },
  { name: "City University of Hong Kong, Hong Kong, China", coords: [22.3372, 114.1731] },
  { name: "Clemson University, Clemson, South Carolina, United States", coords: [34.67663, -82.83741] },
  { name: "East Tennessee State University (ETSU), Johnson City, Tennessee, United States", coords: [36.30324, -82.36949] },
  { name: "Florida International University, Miami, Florida, United States", coords: [25.7570, -80.3730] },
  { name: "George Washington University, Washington, District of Columbia, United States", coords: [38.8997, -77.0470] },
  { name: "GTI Energy, Des Plaines, Illinois, United States", coords: [42.06063, -87.88203] },
  { name: "Hawaii Pacific University, Honolulu, Hawaii, United States", coords: [21.3099, -157.8581] },
  { name: "Iowa State University, Ames, Iowa, United States", coords: [42.0267, -93.6465] },
  { name: "Johns Hopkins University, Baltimore, Maryland, United States", coords: [39.3299, -76.6205] },
  { name: "Kansas State University, Manhattan, Kansas, United States", coords: [39.19203, -96.58002] },
  { name: "LAM Research, Fremont, California, United States", coords: [37.4923, -121.9440] },
  { name: "Lawrence Berkeley National Laboratory, Berkeley, California, United States", coords: [37.8730, -122.2500] },
  { name: "Lila Sciences, Cambridge, Massachusetts, United States", coords: [42.3663, -71.0810] },
  { name: "Long Island University, Brookville, New York, United States", coords: [40.81703, -73.58003] },
  { name: "Louisiana State University, Baton Rouge, Louisiana, United States", coords: [30.41327, -91.18003] },
  { name: "Micron Technology, Boise, Idaho, United States", coords: [43.5636, -116.1990] },
  { name: "Missouri State University, Springfield, Missouri, United States", coords: [37.1980, -93.2850] },
  { name: "Missouri University of Science and Technology, Rolla, Missouri, United States", coords: [37.9543, -91.7730] },
  { name: "NIST - National Institute of Standards and Technology, Gaithersburg, Maryland, United States", coords: [39.14021, -77.21303] },
  { name: "Northeastern Illinois University, Chicago, Illinois, United States", coords: [41.98033, -87.71703] },
  { name: "Northwestern University, Evanston, Illinois, United States", coords: [42.0565, -87.6753] },
  { name: "Oklahoma State University, Stillwater, Oklahoma, United States", coords: [36.1257, -97.0660] },
  { name: "Onsemi, Phoenix, Arizona, United States", coords: [33.4484, -112.0740] },
  { name: "Oregon State University, Corvallis, Oregon, United States", coords: [44.5646, -123.2620] },
  { name: "Pacific Northwest National Laboratory, Richland, Washington, United States", coords: [46.3410, -119.2780] },
  { name: "Penn State University, State College, Pennsylvania, United States", coords: [40.7982, -77.8599] },
  { name: "Physical Electronics, Chanhassen, Minnesota, United States", coords: [44.8586, -93.5300] },
  { name: "Purdue University Fort Wayne, Fort Wayne, Indiana, United States", coords: [41.1230, -85.1080] },
  { name: "Purdue University, West Lafayette, Indiana, United States", coords: [40.4237, -86.9212] },
  { name: "Queen's University, Kingston, Canada", coords: [44.2253, -76.4951] },
  { name: "Recipharm Advanced Bio, Woburn, Massachusetts, United States", coords: [42.4793, -71.1523] },
  { name: "Rensselaer Polytechnic Institute, Troy, New York, United States", coords: [42.7302, -73.6788] },
  { name: "San Diego State University, San Diego, California, United States", coords: [32.7757, -117.0713] },
  { name: "San Jose State University, San Jose, California, United States", coords: [37.3352, -121.8811] },
  { name: "Southwest Research Institute, San Antonio, Texas, United States", coords: [29.45163, -98.61347] },
  { name: "Stanford University, Stanford, California, United States", coords: [37.4275, -122.1697] },
  { name: "Stony Brook University, Stony Brook, New York, United States", coords: [40.9120, -73.1230] },
  { name: "Tata Consultancy Services, Dallas, Texas, United States", coords: [33.07053, -96.82539] },
  { name: "TESCAN Tempe, Tempe, Arizona, United States", coords: [33.4297641, -111.954382] },
  { name: "Texas A&M University, College Station, Texas, United States", coords: [30.6150, -96.3423] },
  { name: "The Aerospace Corporation, El Segundo, California, United States", coords: [33.9164, -118.3830] },
  { name: "The Ohio State University, Columbus, Ohio, United States", coords: [40.0076, -83.0300] },
  { name: "Tulane University, New Orleans, Louisiana, United States", coords: [29.9406, -90.1203] },
  { name: "UC Irvine, Irvine, California, United States", coords: [33.6405, -117.8443] },
  { name: "UNC Chapel Hill, Chapel Hill, North Carolina, United States", coords: [35.9049, -79.0469] },
  { name: "Unilever R&D, Trumbull, Connecticut, United States", coords: [41.24293, -73.20066] },
  { name: "University at Buffalo, Buffalo, New York, United States", coords: [43.00083, -78.78903] },
  { name: "University of Arizona, Tucson, Arizona, United States", coords: [32.2319, -110.9501] },
  { name: "University of British Columbia, Vancouver, Canada", coords: [49.2606, -123.2460] },
  { name: "University of California Berkeley, Berkeley, California, United States", coords: [37.8715, -122.2730] },
  { name: "University of California San Diego, La Jolla, California, United States", coords: [32.8801, -117.2340] },
  { name: "University of Chicago, Chicago, Illinois, United States", coords: [41.7897, -87.5997] },
  { name: "University of Cincinnati, Cincinnati, Ohio, United States", coords: [39.1310, -84.5160] },
  { name: "University of Colorado Boulder, Boulder, Colorado, United States", coords: [40.0076, -105.2659] },
  { name: "University of Connecticut, Storrs, Connecticut, United States", coords: [41.80773, -72.25303] },
  { name: "University of Delaware, Newark, Delaware, United States", coords: [39.67803, -75.75213] },
  { name: "University of Georgia, Athens, Georgia, United States", coords: [33.9480, -83.3773] },
  { name: "University of Houston, Houston, Texas, United States", coords: [29.7199, -95.3422] },
  { name: "University of Illinois Urbana-Champaign, Urbana-Champaign, Illinois, United States", coords: [40.1020, -88.2272] },
  { name: "University of Kentucky, Lexington, Kentucky, United States", coords: [38.0307, -84.5037] },
  { name: "University of Louisiana at Lafayette, Lafayette, Louisiana, United States", coords: [30.2130, -92.0198] },
  { name: "University of Manitoba, Winnipeg, Canada", coords: [49.8078, -97.1325] },
  { name: "University of Maryland, College Park, Maryland, United States", coords: [38.9869, -76.9426] },
  { name: "University of Miami, Coral Gables, Florida, United States", coords: [25.72163, -80.27933] },
  { name: "University of Michigan, Ann Arbor, Michigan, United States", coords: [42.2780, -83.7382] },
  { name: "University of Mississippi, Oxford, Mississippi, United States", coords: [34.3659, -89.5380] },
  { name: "University of North Dakota, Grand Forks, North Dakota, United States", coords: [47.92193, -97.07003] },
  { name: "University of North Texas, Denton, Texas, United States", coords: [33.2075, -97.1526] },
  { name: "University of Ottawa, Ottawa, Canada", coords: [45.4231, -75.6831] },
  { name: "University of Pittsburgh, Pittsburgh, Pennsylvania, United States", coords: [40.4444, -79.9532] },
  { name: "University of Southern California, Los Angeles, California, United States", coords: [34.02243, -118.28513] },
  { name: "University of Tennessee Martin, Martin, Tennessee, United States", coords: [36.3417, -88.8500] },
  { name: "University of Texas at San Antonio, San Antonio, Texas, United States", coords: [29.5830, -98.6190] },
  { name: "University of Toronto, Toronto, Canada", coords: [43.6629, -79.3957] },
  { name: "University of Virginia, Charlottesville, Virginia, United States", coords: [38.03367, -78.50793] },
  { name: "University of Wyoming, Laramie, Wyoming, United States", coords: [41.3114, -105.5863] },
  { name: "UT Dallas, Richardson, Texas, United States", coords: [32.9858, -96.7501] },
  { name: "Valdez AI Consulting, Laramie, Wyoming, United States", coords: [41.3114, -105.5911] },
  { name: "ValueTronics International, Elgin, Illinois, United States", coords: [42.0396, -88.2812] },
  { name: "Virginia Tech, Blacksburg, Virginia, United States", coords: [37.2296, -80.4139] },
  { name: "West Virginia University, Morgantown, West Virginia, United States", coords: [39.6350, -79.9540] },
  { name: "Western Illinois University, Macomb, Illinois, United States", coords: [40.4668, -90.6710] },
  { name: "Duke University, Durham, North Carolina, United States", coords: [35.99963, -78.94743] },
  { name: "Montana State University, Bozeman, Montana, United States", coords: [45.66763, -111.04843] },
  { name: "North Carolina State University, Raleigh, North Carolina, United States", coords: [35.78463, -78.68243] },
  { name: "Thermo Fisher Scientific, Waltham, Massachusetts, United States", coords: [42.39363, -71.25943] },
  { name: "University of California, Davis, Davis, California, United States", coords: [38.53863, -121.76143] },
  { name: "University of Illinois Chicago, Chicago, Illinois, United States", coords: [41.87063, -87.65043] },
  { name: "University of North Carolina at Chapel Hill, Chapel Hill, North Carolina, United States", coords: [35.91263, -79.05143] },
  { name: "University of Rochester, Rochester, New York, United States", coords: [43.12863, -77.62843] },
  { name: "University of Wisconsin–La Crosse, La Crosse, Wisconsin, United States", coords: [43.81463, -91.22943] },
  { name: "XY Insights LLC, Millbrae, California, United States", coords: [37.60017797202989, -122.39047437483646] },
  { name: "University of Nevada, Reno, Nevada, United States", coords: [39.54857, -119.81569] },

  // --- South America ---
  { name: "Centro Nacional de Pesquisa em Energia e Materiais (CNPEM), Campinas, Brazil", coords: [-22.82803, -47.07303] },
  { name: "Federal University of Rio de Janeiro (UFRJ), Rio de Janeiro, Brazil", coords: [-22.8600, -43.2270] },
  { name: "SENAI, Brasília, Brazil", coords: [-15.7934, -47.8825] },
  { name: "Universidad de Chile, Santiago, Chile", coords: [-33.4570, -70.6630] },
  { name: "Usiminas, Ipatinga, Brazil", coords: [-19.46836, -42.53603] },

  // --- Oceania ---
  { name: "Australian National University, Canberra, Australia", coords: [-35.27770, 149.11850] },
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
  name: "University of Tennessee, Knoxville, United States (Host Site)",
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
