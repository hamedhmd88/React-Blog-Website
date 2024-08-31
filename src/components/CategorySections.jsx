


function CategorySections({ activeCategory, handleCategoryChange}) {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"]
  return (
    <div className=" px-4 mb-8 space-x-8 lg:space-x-16 flex flex-wrap justify-center  items-center border-b-2 py-5 text-gray-900">
        <button onClick={() => handleCategoryChange(null)} className={`lg:ml-12 hover:text-orange-500 ${activeCategory ? "" : " bg-orange-500  px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 hover:shadow-orange-700 shadow-xl transition-all duration-200 ease-in"}`}>All</button>
        {
            categories.map((category) => (
                <>
                    <button onClick={() => handleCategoryChange(category)}
                            className={`mr-2 space-x-16 hover:text-orange-500 ${activeCategory === category ? " bg-orange-500  px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 hover:shadow-orange-700 shadow-xl transition-all duration-200 ease-in" : ""}`}
                            key={category}
                    >
                    {category}
                    </button>
                </>
            ))
        }
    </div>
  );
}

export default CategorySections