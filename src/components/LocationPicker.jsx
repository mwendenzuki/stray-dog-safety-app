import { useState } from 'react';
import FormField from './FormField';

function LocationPicker({ value, onChange, error }) {
  const [isLoading, setIsLoading] = useState(false);
  
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }
    
    setIsLoading(true);
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Try to get the address using reverse geocoding
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          
          if (response.ok) {
            const data = await response.json();
            const address = data.display_name || 'Unknown location';
            
            onChange({
              lat: latitude,
              lng: longitude,
              address
            });
          } else {
            onChange({
              lat: latitude,
              lng: longitude,
              address: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
            });
          }
        } catch (err) {
          onChange({
            lat: latitude,
            lng: longitude,
            address: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
          });
        } finally {
          setIsLoading(false);
        }
      },
      (err) => {
        console.error('Error getting location:', err);
        alert(`Unable to retrieve your location: ${err.message}`);
        setIsLoading(false);
      },
      { 
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };
  
  const handleAddressChange = (e) => {
    onChange({
      ...value,
      address: e.target.value
    });
  };
  
  return (
    <FormField
      label="Location"
      error={error}
    >
      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Address or location description"
            className="flex-grow px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={value.address}
            onChange={handleAddressChange}
            disabled={isLoading}
          />
          
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-300 disabled:bg-green-300"
            onClick={getCurrentLocation}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </button>
        </div>
        
        {value.lat && value.lng && (
          <div className="text-xs text-gray-500">
            GPS: {value.lat.toFixed(6)}, {value.lng.toFixed(6)}
          </div>
        )}
      </div>
    </FormField>
  );
}

export default LocationPicker;