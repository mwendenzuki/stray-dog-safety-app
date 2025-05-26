import { useState } from 'react';
import Form from './components/Form';
import MapScreen from './components/MapScreen';
import ConfirmationAnimation from './components/ConfirmationAnimation';
import { addDogReport } from './services/dogReportsService';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeView, setActiveView] = useState('form'); // 'form' or 'map'
  
  const handleFormSubmit = (formData) => {
    // Add the report to our service
    const newReport = addDogReport(formData);
    console.log('Form submitted with data:', newReport);
    
    setIsSubmitted(true);
    
    // Reset form state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      // Switch to the map view to see the newly added report
      setActiveView('map');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 font-sans">
      {/* Navigation tabs */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-amber-100 flex z-20 shadow-lg rounded-t-xl">
        <button 
          className={`flex-1 py-3.5 text-center ${activeView === 'form' ? 'text-amber-600 border-t-2 border-amber-500' : 'text-gray-500'}`}
          onClick={() => setActiveView('form')}
        >
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="text-sm mt-1 font-medium">Report</span>
          </div>
        </button>
        <button 
          className={`flex-1 py-3.5 text-center ${activeView === 'map' ? 'text-amber-600 border-t-2 border-amber-500' : 'text-gray-500'}`}
          onClick={() => setActiveView('map')}
        >
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-sm mt-1 font-medium">Map</span>
          </div>
        </button>
      </div>

      <div className="w-full max-w-lg mx-auto px-4 pb-24 pt-4 sm:pt-8">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-amber-600 font-['Comic_Sans_MS',_cursive] md:text-4xl">Stray Dog Reporter</h1>
          <p className="text-gray-700 mt-2 font-['Quicksand',_sans-serif]">
            {activeView === 'form' 
              ? '✨ Help our community by reporting stray dogs in need ✨'
              : '🐾 View reported stray dogs on the map 🐾'}
          </p>
        </header>
        
        <div className="transition-all duration-300 ease-in-out">
          {isSubmitted ? (
            <ConfirmationAnimation />
          ) : activeView === 'form' ? (
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Form onSubmit={handleFormSubmit} />
            </div>
          ) : (
            <div className="h-[75vh] overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <MapScreen />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;