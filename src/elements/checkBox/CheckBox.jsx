import React from 'react';

const Checkbox = ({ name, label, checked, onChange }) => {
  return (
    <label className="flex items-center text-sm">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="mr-2 p-1"
      />
      {label}
    </label>
  );
};

export default Checkbox;
