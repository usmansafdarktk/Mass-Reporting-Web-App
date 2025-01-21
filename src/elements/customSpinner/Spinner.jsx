import React from 'react';

const Spinner = () => (
    <div className="flex flex-col items-center justify-center h-full">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
    </div>
);

export default Spinner;
