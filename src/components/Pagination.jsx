
function Pagination({onePageChange, currentPage, blogs, pageSize, totalPages}) {
  return (
    <>
        <div className="flex justify-center mt-8 mb-8">
        <button
          onClick={() => onePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1 px-4 py-2 bg-gray-300 hover:bg-orange-500 text-gray-800 rounded disabled:opacity-50"
        >
          previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => onePageChange(index + 1)}
            className={`mx-1 px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-300 hover:bg-orange-500 text-gray-800"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => onePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="mx-1 px-4 py-2 bg-gray-300 hover:bg-orange-500 text-gray-800 rounded disabled:opacity-50"
        >
          next
        </button>
      </div>
    </>
  )
}

export default Pagination