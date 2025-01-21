import React from 'react';

const CrossButton = ({ onClick, className = '', ...props }) => {
  return (
    <button 
      type="button" 
      className={`bg-none border-none cursor-pointer flex items-center justify-center p-2 rounded-full min-w-[20px] transition-colors duration-300 ease-in-out hover:bg-black/10 ${className}`} 
      onClick={onClick} 
      {...props}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="feather feather-x"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );
};

export default CrossButton;