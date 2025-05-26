import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

function DogMarker({ dog, onClick }) {
  // Create marker icon based on aggression level
  const getMarkerIcon = (aggressionLevel) => {
    // Define colors based on aggression level
    const markerColors = {
      low: '#4CAF50', // Green
      medium: '#FFC107', // Yellow
      high: '#F44336', // Red
    };
    
    const color = markerColors[aggressionLevel] || markerColors.low;
    
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: ${color};
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 3px 7px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transform-origin: center;
          animation: pulse 1.5s infinite;
        ">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M4.5 9.5C5.88 9.5 7 8.38 7 7S5.88 4.5 4.5 4.5 2 5.62 2 7s1.12 2.5 2.5 2.5zM9 6c1.66 0 3-1.34 3-3s-1.34-3-3-3S6 1.34 6 3s1.34 3 3 3zm13 9.5c0-2.76-2.24-5-5-5h-5.5v-2h-2v2H7c-2.76 0-5 2.24-5 5V18h18v-2.5z"/>
          </svg>
        </div>
        <style>
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        </style>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });
  };

  return (
    <Marker
      position={[dog.location.lat, dog.location.lng]}
      icon={getMarkerIcon(dog.aggressionLevel)}
      eventHandlers={{
        click: () => onClick(),
      }}
    />
  );
}

export default DogMarker;