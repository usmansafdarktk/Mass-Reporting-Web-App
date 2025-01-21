import React from 'react';

const CustomDropdown = ({ id, name, value, onChange, options, disabled, placeholder, className }) => {
    return (
        <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required
            disabled={disabled}
            className={`w-full border border-gray-300 rounded px-3 py-1 bg-gray-100 ${className}`}
        >
            <option value="" disabled>
                {placeholder}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default CustomDropdown;
