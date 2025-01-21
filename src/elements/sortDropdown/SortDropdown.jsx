// SortDropdown.jsx
import React, { useState, useEffect } from 'react';

const SortDropdown = ({ Data, setData, options }) => {
  // const [selectedSort, setSelectedSort] = useState(options[0].value); 

  // Separate sort function
  // const handleSort = (data, sortType) => {
  //   if (!data || data.length === 0) return data; // If no data, return as-is

  //   let sortedData = [...data]; // Create a copy of the data

  //   // Sort the data based on the selected option
  //   if (sortType === 'oldest') {
  //     sortedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  //   }
  //   else if (sortType === 'newest') {
  //     sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  //   }
  //   else if (sortType === 'asc') {
  //     sortedData.sort((a, b) => a.OrderCost - b.OrderCost); // Sort ascending by Cost
  //   }
  //   else if (sortType === 'des') {
  //     sortedData.sort((a, b) => b.OrderCost - a.OrderCost) // Sort descending by Cost
  //   }

  //   return sortedData; // Return sorted data
  // };

  // useEffect(() => {
  //   const sortedData = handleSort(Data, selectedSort); // Call the sorting function
  //   setData(sortedData); // Update the data state
  // }, [selectedSort]); // Re-run when selectedSort or Data changes

  // const handleChange = (value) => {
  //   if (value !== selectedSort) { // Only update if the selected value has changed
  //     setSelectedSort(value); // Update the selected sort option
  //   }
  // };

  return (
    <div className="relative">
      <select
        // value={selectedSort}
        // onChange={(e) => handleChange(e.target.value)}
        className="block appearance-none w-full bg-gray-100 text-gray-600 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500"
      >
        {/* {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))} */}
      </select>
    </div>
  );
};

export default SortDropdown;
