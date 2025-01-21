import React, { useState, useEffect } from "react";
import search from "../../assets/search.svg";

function SearchBar({ Data, setData, className, searchKey }) {
  // const [searchQuery, setSearchQuery] = useState("");
  // // console.log(Data)
  // useEffect(()=>{
  //   handleFilter()
  // },[searchQuery])
  
  // const handleFilter = (event) => {
  
  //   if (!Data || Data.length === 0) {
  //     return;
  //   }
  //   const filteredData = Data.filter(item => 
  //     item[searchKey]?.toLowerCase()?.includes(searchQuery)
  //   );
  //   setData(filteredData); // Use setCustomers to update the state
  // };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search by..."
        // value={searchQuery}
        // onChange={(e) => setSearchQuery(e.target.value)}
        className={`w-full py-1 pr-10 pl-3 rounded-md border border-transparent outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-500 ${className}`}
      />
      <div className="absolute right-2 flex items-center pointer-events-none">
        <img src={search} alt="search" width={18} height={18} />
      </div>
    </div>
  );
}

export default SearchBar;
