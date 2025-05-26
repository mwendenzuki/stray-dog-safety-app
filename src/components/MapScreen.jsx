import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapScreen.css';
import DogMarker from './DogMarker';
import DogDetailPopup from './DogDetailPopup';
import { getAllDogReports } from '../services/dogReportsService';

// Fix for Leaflet icon issue with webpack
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function MapScreen() {
  const [dogReports, setDogReports] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  const [mapCenter, setMapCenter] = useState([40.7128, -74.0060]); // Default to NYC
  const [mapZoom, setMapZoom] = useState(12);

  useEffect(() => {
    // Load dog reports
    const reports = getAllDogReports();
    setDogReports(reports);
    
    // If there are reports, center the map on the first one
    if (reports.length > 0) {
      setMapCenter([reports[0].location.lat, reports[0].location.lng]);
    }
    
    // Try to get user location for better initial map view
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMapCenter([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.log('Error getting user location:', error);
      }
    );
  }, []);

  const handleMarkerClick = (dog) => {
    setSelectedDog(dog);
  };

  const handleClosePopup = () => {
    setSelectedDog(null);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-grow relative">
        {/* Legend */}
        <div className="absolute top-2 left-2 bg-white p-2 rounded-lg shadow-md z-10 text-xs">
          <div className="text-sm font-medium mb-1">Aggression Level</div>
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
            <span>Low</span>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
            <span>High</span>
          </div>
        </div>
        
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false} // Better for mobile
          attributionControl={false}
        >
          {/* Add zoom control with ZoomControl component */}
          <div className="leaflet-top leaflet-right" style={{zIndex: 1000}}>
            <div className="leaflet-control leaflet-bar">
              <a href="#" title="Zoom in" role="button" aria-label="Zoom in" onClick={(e) => {
                e.preventDefault();
                const map = document.querySelector('.leaflet-container')._leaflet_map;
                if (map) map.zoomIn();
              }} className="leaflet-control-zoom-in">+</a>
              <a href="#" title="Zoom out" role="button" aria-label="Zoom out" onClick={(e) => {
                e.preventDefault();
                const map = document.querySelector('.leaflet-container')._leaflet_map;
                if (map) map.zoomOut();
              }} className="leaflet-control-zoom-out">−</a>
            </div>
          </div>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {dogReports.map(dog => (
            <DogMarker
              key={dog.id}
              dog={dog}
              onClick={() => handleMarkerClick(dog)}
            />
          ))}
        </MapContainer>

        {selectedDog && (
          <DogDetailPopup 
            dog={selectedDog} 
            onClose={handleClosePopup} 
          />
        )}
      </div>
    </div>
  );
}

export default MapScreen;