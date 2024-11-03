// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for frontend-backend communication
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Serve static files (HTML, CSS, JS) from the "public" directory
app.use(express.static('public'));

// Sample endpoint to fetch speed limits for specific roads
app.get('/api/speed-limit', (req, res) => {
  // For demonstration, return static data
  res.json({ speedLimit: 80, unit: 'km/h' });
});

// Endpoint to log driver feedback or other actions
app.post('/api/feedback', (req, res) => {
  const { message, driverId } = req.body;
  console.log(`Feedback from driver ${driverId}: ${message}`);
  
  // Here, you could save the feedback to a database
  res.status(200).json({ success: true, message: 'Feedback received' });
  
  });

// Emergency contacts data
const emergencyContacts = [
  {
    service: 'Police',
    number: '100',
    icon: '🚔'
  },
  {
    service: 'Ambulance',
    number: '108',
    icon: '🚑'
  },
  {
    service: 'Fire Services',
    number: '101',
    icon: '🔥'
  },
  {
    service: 'Roadside Assistance',
    number: '1800-123-4567',
    icon: '🔧'
  }
];

// API endpoint to get emergency contacts
app.get('/api/emergency-contacts', (req, res) => {
  res.json(emergencyContacts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
