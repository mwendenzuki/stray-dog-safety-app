import { useState } from 'react';
import FormField from './FormField';
import ImageUpload from './ImageUpload';
import LocationPicker from './LocationPicker';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    photo: null,
    location: { lat: null, lng: null, address: '' },
    description: '',
    aggressionLevel: 'low'
  });
  
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  const handlePhotoChange = (file) => {
    handleInputChange('photo', file);
  };
  
  const handleLocationChange = (locationData) => {
    handleInputChange('location', locationData);
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.photo) {
      newErrors.photo = 'Please upload a photo';
    }
    
    if (!formData.location.lat || !formData.location.lng) {
      newErrors.location = 'Please select a location';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a description';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      // Reset form
      setFormData({
        photo: null,
        location: { lat: null, lng: null, address: '' },
        description: '',
        aggressionLevel: 'low'
      });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <ImageUpload 
          value={formData.photo} 
          onChange={handlePhotoChange}
          error={errors.photo}
        />
        
        <LocationPicker
          value={formData.location}
          onChange={handleLocationChange}
          error={errors.location}
        />
        
        <FormField
          label="Description"
          error={errors.description}
        >
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
            placeholder="Describe the dog and any relevant details..."
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
        </FormField>
        
        <FormField
          label="Aggression Level"
        >
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            value={formData.aggressionLevel}
            onChange={(e) => handleInputChange('aggressionLevel', e.target.value)}
          >
            <option value="low">Low - Friendly/Approachable</option>
            <option value="medium">Medium - Cautious/Uncertain</option>
            <option value="high">High - Aggressive/Dangerous</option>
          </select>
        </FormField>
      </div>
      
      <div className="px-6 pb-6">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
        >
          Submit Report
        </button>
      </div>
    </form>
  );
}

export default Form;