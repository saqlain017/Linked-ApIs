// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div className='container d-flex align-items-center justify-content-center gap-2'>
      <button onClick={onPrevPage} disabled={currentPage === 1} class="btn btn-outline-secondary">
        Previous
      </button>
      <button onClick={onNextPage} disabled={currentPage === totalPages} class="btn btn-outline-success" >
        Next
      </button>
    </div>
  );
};

export default Pagination;
