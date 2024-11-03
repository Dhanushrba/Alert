let map, panorama;
const toggleButton = document.getElementById("toggle-view");
const alertBox = document.getElementById("alert");

// Sample route coordinates for testing
const routeCoordinates = [
  { lat: 37.7749, lng: -122.4194 }, // Example starting point
  { lat: 37.7750, lng: -122.4189 },
  { lat: 37.7751, lng: -122.4185 },
  { lat: 37.7753, lng: -122.4180 },
  { lat: 37.7755, lng: -122.4175 },
  // Add more points for a more realistic route
];

// Initialize Google Maps
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: routeCoordinates[0], // Center on the starting point
    zoom: 15,
    mapTypeId: "satellite", // Start with satellite view
  });

  // Initialize Street View
  panorama = new google.maps.StreetViewPanorama(document.getElementById("map"), {
    position: routeCoordinates[0],
    pov: { heading: 165, pitch: 0 },
    visible: false,
  });
  map.setStreetView(panorama);

  // Add route polyline to the map
  const routePath = new google.maps.Polyline({
    path: routeCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.7,
    strokeWeight: 4,
  });
  routePath.setMap(map);

  // Calculate curve radius along the route and display alerts
  detectCurves(routeCoordinates);

  // Toggle between Satellite and Street View on button click
  toggleButton.addEventListener("click", () => {
    const isStreetViewVisible = panorama.getVisible();
    panorama.setVisible(!isStreetViewVisible);
    toggleButton.textContent = isStreetViewVisible ? "Toggle Street View" : "Toggle Satellite View";
  });
}

// Detect sharp curves along the route by calculating curve radius
function detectCurves(coords) {
  for (let i = 1; i < coords.length - 1; i++) {
    const p1 = new google.maps.LatLng(coords[i - 1].lat, coords[i - 1].lng);
    const p2 = new google.maps.LatLng(coords[i].lat, coords[i].lng);
    const p3 = new google.maps.LatLng(coords[i + 1].lat, coords[i + 1].lng);

    const radius = calculateCurveRadius(p1, p2, p3);
    console.log("Curve Radius:", radius);

    // Show alert if the radius is small (indicating a sharp curve)
    if (radius < 500) { // Adjust threshold as needed
      showAlert();
      break;
    }
  }
}

// Calculate radius of a curve given three points
function calculateCurveRadius(p1, p2, p3) {
  const a = google.maps.geometry.spherical.computeDistanceBetween(p1, p2);
  const b = google.maps.geometry.spherical.computeDistanceBetween(p2, p3);
  const c = google.maps.geometry.spherical.computeDistanceBetween(p1, p3);
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  // Radius of the circumcircle for the triangle formed by the three points
  const radius = (a * b * c) / (4 * area);
  return radius;
}

// Display an alert for sharp curves
function showAlert() {
  alertBox.style.display = "block";
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000); // Hide alert after 3 seconds
}

// Initialize map on page load
window.onload = initMap;
