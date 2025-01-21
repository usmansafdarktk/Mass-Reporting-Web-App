import React from 'react';

const ButtonWithIcon = ({ icon, text, onClick, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={`flex items-center justify-center py-2 border-none rounded-full cursor-pointer font-medium gap-2 ${className}`}
    >
      {icon && <span className="text-sm flex items-center justify-center">{icon}</span>}
      <span className="text-base">{text}</span>
    </button>
  );
};

export default ButtonWithIcon;
