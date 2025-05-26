import React, { useState } from 'react';

function DogDetailPopup({ dog, onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  
  // Trigger closing animation before actually removing the component
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Duration of the animation
  };
  
  // Format the timestamp to a friendly date/time
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  // Define classes for the animation
  const containerClasses = `
    fixed inset-x-0 bottom-0 z-50 
    bg-white rounded-t-2xl shadow-xl 
    transition-all duration-300 transform
    ${isVisible ? 'translate-y-0' : 'translate-y-full'}
  `;

  return (
    <div className={containerClasses} style={{ maxHeight: '80vh' }}>
      {/* Handle for dragging (just visual) */}
      <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto my-3"></div>
      
      {/* Close button */}
      <button 
        className="absolute top-3 right-3 p-1 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={handleClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="p-5 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 40px)' }}>
        {/* Dog photo */}
        {dog.photoUrl && (
          <div className="mb-4 rounded-lg overflow-hidden shadow-md">
            <img 
              src={dog.photoUrl} 
              alt="Reported dog" 
              className="w-full object-cover h-48 md:h-64"
            />
          </div>
        )}
        
        {/* Dog info */}
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className={`
                inline-block px-4 py-1.5 rounded-full text-sm font-medium flex items-center
                ${dog.aggressionLevel === 'low' ? 'bg-green-100 text-green-800' : 
                  dog.aggressionLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'}
              `}>
                <div className={`
                  w-3 h-3 rounded-full mr-2
                  ${dog.aggressionLevel === 'low' ? 'bg-green-500' : 
                    dog.aggressionLevel === 'medium' ? 'bg-yellow-500' : 
                    'bg-red-500'}
                `}></div>
                {dog.aggressionLevel.charAt(0).toUpperCase() + dog.aggressionLevel.slice(1)} Aggression
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              Reported on {formatDate(dog.timestamp)}
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-700">{dog.location.address}</p>
          </div>
          
          {/* Description */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Description</h3>
            <p className="text-gray-600">{dog.description}</p>
          </div>
        </div>
        
        <div className="mt-8 mb-2">
          <div className="text-xs text-center text-gray-500 mb-3">This is a simulation. In a real app, these buttons would connect to rescue services.</div>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center transition-colors shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Rescue
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-3 rounded-xl flex items-center transition-colors shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogDetailPopup;