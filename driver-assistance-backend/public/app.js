let map, panorama;
const curveAlert = document.getElementById("curve-alert");
const toggleButton = document.getElementById("toggle-view");

// Sample route coordinates
const routeCoordinates = [
  { lat: 37.7749, lng: -122.4194 },
  { lat: 37.7750, lng: -122.4189 },
  { lat: 37.7751, lng: -122.4185 },
  { lat: 37.7753, lng: -122.4180 },
  { lat: 37.7755, lng: -122.4175 },
  // Add more points for a realistic route
];

// Initialize Google Maps with Satellite View
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: routeCoordinates[0],
    zoom: 15,
    mapTypeId: "satellite"
  });

  // Initialize Street View
  panorama = new google.maps.StreetViewPanorama(document.getElementById("map"), {
    position: routeCoordinates[0],
    pov: { heading: 165, pitch: 0 },
    visible: false
  });
  map.setStreetView(panorama);

  // Draw the route
  const routePath = new google.maps.Polyline({
    path: routeCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.7,
    strokeWeight: 4
  });
  routePath.setMap(map);

  // Calculate curve radius and show alerts
  detectCurves(routeCoordinates);

  // Toggle between Satellite and Street View
  toggleButton.addEventListener("click", () => {
    panorama.setVisible(!panorama.getVisible());
    toggleButton.textContent = panorama.getVisible() ? "Toggle Satellite View" : "Toggle Street View";
  });
}

// Detect sharp curves and display alerts
function detectCurves(coords) {
  for (let i = 1; i < coords.length - 1; i++) {
    const p1 = new google.maps.LatLng(coords[i - 1].lat, coords[i - 1].lng);
    const p2 = new google.maps.LatLng(coords[i].lat, coords[i].lng);
    const p3 = new google.maps.LatLng(coords[i + 1].lat, coords[i + 1].lng);

    const radius = calculateCurveRadius(p1, p2, p3);
    console.log("Curve Radius:", radius);

    // Show alert if the radius is small
    if (radius < 500) {
      curveAlert.classList.remove("hidden");
      setTimeout(() => curveAlert.classList.add("hidden"), 3000); // Hide after 3 seconds
      break;
    }
  }
}

// Calculate the radius of a curve using three points
function calculateCurveRadius(p1, p2, p3) {
  const a = google.maps.geometry.spherical.computeDistanceBetween(p1, p2);
  const b = google.maps.geometry.spherical.computeDistanceBetween(p2, p3);
  const c = google.maps.geometry.spherical.computeDistanceBetween(p1, p3);
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  const radius = (a * b * c) / (4 * area);
  return radius;
}

// Initialize map on load
window.onload = initMap;
// Fetch speed limit from backend and display on page
async function getSpeedLimit() {
  try {
    const response = await fetch('http://localhost:3000/api/speed-limit');
    const data = await response.json();
    document.getElementById('speed-limit').innerHTML = `Speed Limit: ${data.speedLimit} ${data.unit}`;
  } catch (error) {
    console.error('Error fetching speed limit:', error);
  }
}

// Call the function when the page loads
window.onload = () => {
  initMap(); // Initialize Google Maps
  getSpeedLimit(); // Fetch and display speed limit
};
