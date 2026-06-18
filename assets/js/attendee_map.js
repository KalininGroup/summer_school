fetch(document.getElementById("map").dataset.locationsUrl)
  .then((response) => response.json())
  .then((locations) => {
    const blueIcon = new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    const utkIcon = new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    const utkMarker = {
      name: "University of Tennessee, Knoxville, United States (Host Site)",
      coords: [35.9545, -83.9295],
    };

    const map = L.map("map", {
      center: [20, 0],
      zoom: 2,
      minZoon: 2,
      worldCopyJump: false,
      maxBoundsViscosity: 1.0,
      maxBounds: [
        [-85, -180],
        [85, 180],
      ],
      maxBoundsViscosity: 1.0,
      noWrap: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      noWrap: true,
      bounds: [
        [-85, -180],
        [85, 180],
      ],
    }).addTo(map);

    const markers = L.markerClusterGroup({
      showCoverageOnHover: false,
    });

    locations.forEach((loc) => {
      const marker = L.marker(loc.coords, { icon: blueIcon }).bindPopup(loc.name);
      markers.addLayer(marker);
    });

    L.marker(utkMarker.coords, { icon: utkIcon }).bindPopup(utkMarker.name).addTo(map);

    map.addLayer(markers);
  });
