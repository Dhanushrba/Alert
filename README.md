Project Name- Curve Detection
Team Name- Robnex
Team Members
Team Lead: Dhanush G - Saintgits college of engineering
Member 2:Aswan A S - Saintgits college of engineering
Member 3:Adwaith S Nair - Saintgits college of engineering
 
 Project Description
The Curve Detection System is a real-time driver assistance tool that identifies road curves and provides safe speed recommendations.
Using GPS and map data, it alerts drivers to sharp curves with audio prompts, enhancing road safety and improving navigation on challenging routes.

 The Problem 
Sharp turn without any barriers which cause death in some cases 

  The Solution 
Using google map API

  Technologies Used
   Language - Javascript,Css,html
   Framework - Google Map API
   Tools - VSCODE 
   
    Implementation
   Implementing curve detection typically involves analyzing GPS coordinates or map data to identify and measure road curves

   Installation
  Node.js

  Documentation 
  Project Documentation: Curve Detection System for Driver Assistance
Table of Contents
Introduction
Objective
System Requirements
Project Architecture
Implementation Steps
Code Explanation
Usage Instructions
Future Enhancements
1. Introduction
The Curve Detection System is a driver assistance tool that enhances road safety by detecting curves in real-time and alerting drivers of potentially sharp turns. It uses GPS data and mathematical calculations to measure curve sharpness and recommends a safe speed for approaching curves. This system can be integrated into vehicle navigation to improve safety on challenging roadways.

2. Objective
Curve Detection: Identify road curves by analyzing GPS or map data.
Driver Alerts: Provide real-time alerts for sharp curves to prompt safe driving adjustments.
Speed Recommendations: Calculate and display recommended speeds based on curve sharpness.
3. System Requirements
Hardware
GPS-enabled device (e.g., smartphone, GPS module)
Optional: Raspberry Pi or in-vehicle computer for real-time processing
Software
Frontend: HTML, CSS, JavaScript (for visual alerts and map visualization)
Backend: Node.js with Express (for handling data requests)
APIs:
Google Maps API (for map and path visualization)
Google Geocoding API (optional for reverse geocoding)
4. Project Architecture
Data Collection: Collect GPS data points or use map APIs (e.g., Google Maps API) to extract route information.
Curve Detection:
Analyze the collected GPS points to identify potential curves.
Use mathematical formulas to calculate the radius of curvature.
Driver Alerts and Recommendations:
Display alerts when approaching sharp curves.
Recommend a safe speed based on the detected curve’s sharpness.
Frontend:
Display the map and real-time location updates.
Show speed and curve alerts as visual cues.
5. Implementation Steps
Step 1: Set Up the Map and API Integration
Register for Google Maps API and obtain an API key.
Integrate Google Maps API into the project’s frontend to visualize the map and route.
Step 2: Curve Detection Calculation
Data Collection: Collect a series of consecutive GPS coordinates along the road.
Curve Radius Calculation:
Select three consecutive points 
(𝑝1,𝑝2,𝑝3)
(p1,p2,p3).
Calculate distances between these points (𝑎a, 𝑏b, and 𝑐c).
Use the radius of curvature formula to calculate the curve radius.
Formula:𝑅=𝑎⋅𝑏⋅𝑐4⋅𝐴
R= 4⋅Aa⋅b⋅c
​where 
𝐴
A is the area of the triangle formed by
(𝑝1,𝑝2,𝑝3)
(p1,p2,p3), calculated using Heron’s formula.
Step 3: Define Alert Thresholds
Set radius thresholds to classify curves as “sharp” or “safe.”
Trigger alerts based on these classifications to notify the driver of sharp curves.
Step 4: Implement Driver Alerts
Create visual and audio cues for curves detected below the safe radius threshold.
Add real-time speed recommendations based on the sharpness of the curve.
Step 5: Test and Adjust Thresholds
Test the system on different routes to calibrate the radius threshold.
Adjust parameters to improve accuracy and responsiveness.
   
Step 6: Set Up API Key:

Add your Google Maps API key in the frontend code for map integration.
Run the Application:

Start the Node.js server (if using a backend) to handle API requests.
Open the frontend to view the map, route, and real-time curve alerts.
Testing the Curve Detection:

Input GPS coordinates manually or via GPS device.
Test on routes with varying sharpness to ensure accurate curve detection.
Step 7. Future Enhancements
Weather and Road Condition Integration: Use real-time weather data to adjust speed recommendations.
Image-Based Curve Detection: Integrate computer vision for more robust curve detection using camera input.
Driver Feedback Logging: Track driver responses to alerts for behavior analysis and system improvements.

![screenshot1](https://github.com/user-attachments/assets/18baeb7c-074d-41c1-8594-5aada4642880)
![Screenshot2](https://github.com/user-attachments/assets/0bd8d349-35d6-4b21-8fe6-f838feedd2a8) - Backend 


![Screenshot3](https://github.com/user-attachments/assets/d3481c3b-dc9f-4e51-b167-d8ef24ea403e) -   Frontend
![Screenshot4](https://github.com/user-attachments/assets/02dac63e-c239-4710-97e9-609edbc1c510) - Website 


Team Contributions 
Aswan A S - Frontend
Dhanush G -Backend
Adwaith S Nair - Style and Desgin
