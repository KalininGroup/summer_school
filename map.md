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

<div id="map" data-locations-url="{{ '/assets/data/attendee_locations.json' | relative_url }}" style="height: 600px; margin-top: 20px;"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"></script>

<script src="{{ '/assets/js/attendee_map.js' | relative_url }}"></script>
