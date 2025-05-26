import { useId } from 'react';

function FormField({ label, children, error }) {
  const id = useId();
  
  return (
    <div className="mb-6">
      <label 
        htmlFor={id}
        className="block text-gray-700 font-medium mb-2"
      >
        {label}
      </label>
      
      {children}
      
      {error && (
        <p className="mt-1 text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}

export default FormField;