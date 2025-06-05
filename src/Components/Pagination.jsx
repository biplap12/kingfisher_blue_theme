import React from 'react'

const Pagination = ({
  currentPage,
  totalPages,
  totalCount,
  rowsPerPage,
  setCurrentPage,
  setRowsPerPage,
  handlePageInput,
  startIndex,
  endIndex
}) => {
  return (
    <>
    {/* Elegant Pagination */}
        <div className="flex items-center justify-between mt-10 p-4  border-gray-600 bg-white rounded-lg shadow-lg">
          <span className="text-sm text-gray-800">
            Showing {startIndex}-{endIndex} from {totalCount}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="text-gray-500 hover:text-white disabled:opacity-40"
            >
              «
            </button>

            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="text-gray-500 hover:text-white disabled:opacity-40"
            >
              ‹
            </button>

            <input
              type="number"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={handlePageInput}
              className="w-12 text-center bg-[#292929] text-white  rounded px-2 py-1"
            />
            <span className="text-sm text-gray-400">of {totalPages}</span>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="text-800 hover:text-white disabled:opacity-40"
            >
              ›
            </button>

            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="text-800 hover:text-white disabled:opacity-40"
            >
              »
            </button>

            <div className="ml-4 text-sm text-gray-800 flex items-center gap-2">
              Rows per page:
              <select
                value={rowsPerPage}
                onChange={e => {
                  setRowsPerPage(parseInt(e.target.value));
                  setCurrentPage(1);
                }}
                className="bg-[#292929] text-white border  rounded px-2 py-1"
              >
                {[6, 9, 12, 15].map(size => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
    </>
  )
}

export default Pagination