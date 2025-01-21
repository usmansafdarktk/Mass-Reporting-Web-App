import React from 'react';

const CustomInput = ({ className, id, name, placeholder, value, onChange, required, type = 'text', readOnly = false }) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={readOnly ? undefined : onChange}
        required={required}
        readOnly={readOnly}
        className={`remove-arrow w-full p-1 bg-gray-100 border border-gray-300 rounded-md text-base box-border focus:outline-none focus:border-gray-300 ${className} ${readOnly ? 'bg-gray-300' : ''}`}
      />
    </div>
  );
};

export default CustomInput;
