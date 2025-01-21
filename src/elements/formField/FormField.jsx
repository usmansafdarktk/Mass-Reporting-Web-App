import React from 'react';

const FormField = ({ fields, handleInputChange, maxlength, newMeal }) => {
  return (
    <div className="flex gap-10 mb-4 w-full">
      {fields.map(({ label, name, placeholder }) => (
        <div className="flex flex-col flex-1 relative" key={name}>
          <h1 className="mb-2 font-semibold">{label}</h1>
          <div className="relative">
            <textarea
              name={name}
              placeholder={placeholder}
              value={newMeal[name]}
              maxLength={maxlength || undefined}
              onChange={handleInputChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm bg-gray-100 h-32 pr-10" // Added padding-right for space
            />
            {maxlength && name === 'description' && (
              <span className="absolute top-1 right-3 text-xs text-gray-500">
                {newMeal[name].length}/{maxlength}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormField;
