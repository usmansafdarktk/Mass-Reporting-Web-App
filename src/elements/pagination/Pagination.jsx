import React from 'react';
import NextIcon from '../../assets/customIcons/generalIcons/details.svg';

function Pagination({ currentPage, totalPages, onPageChange, itemsPerPage, totalItems }) {
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = Math.min(indexOfFirstItem + itemsPerPage, totalItems);

  // Function to generate page numbers
  const generatePageNumbers = () => {
    // If there's only one page, return only that page
    if (totalPages === 1) return [1];

    const pages = [];
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    pages.push(1); // Always include the first page

    if (startPage > 2) pages.push('...'); // Add ellipsis if necessary

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) pages.push('...'); // Add ellipsis if necessary

    pages.push(totalPages); // Always include the last page

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex justify-between items-center">
      {/* Showing range of entries */}
      <div>
        Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {totalItems} entries
      </div>
      
      {/* Pagination controls */}
      <div className="flex items-center justify-end space-x-2">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="bg-gray-100 px-2 py-2 rounded-full"
          disabled={currentPage <= 1}
        >
          <img src={NextIcon} alt="Previous" className="w-5 h-5 transform scale-x-[-1]" />
        </button>

        {/* Page number buttons */}
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            className={`px-3 py-1 rounded-full ${
              currentPage === page ? 'bg-[#fe8c00] text-white' : 'bg-gray-100 text-black'
            }`}
            disabled={typeof page !== 'number'}
          >
            {page}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="bg-gray-100 px-2 py-2 rounded-full"
          disabled={currentPage >= totalPages}
        >
          <img src={NextIcon} alt="Next" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
