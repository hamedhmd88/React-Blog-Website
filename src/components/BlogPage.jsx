import { useEffect, useState } from "react"
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySections from "./CategorySections"
import SideBar from "./SideBar";

function BlogPage() {
    
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 ; // blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null)
    const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
    
        // let url = `/public/api/blogsData.json?page=${currentPage}&limit=${pageSize}`;
        // if (selectedCategory) {
        //     url = `${url}&category=${selectedCategory}`;
        // }
        // fetch(url)
        //  .then(response => response.json())
        //  .then(data => setBlogs(data) )
        let url = `public/api/blogsData.json`
        fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // فیلتر کردن بر اساس دسته‌بندی (اگر دسته‌بندی انتخاب شده باشد)
        // if (category && category !== "all") {
        //   data = data.filter((blog) => blog.category.toLowerCase() === category.toLowerCase());
        // }
        // محاسبه تعداد کل صفحات
        setTotalPages(Math.ceil(data.length / pageSize));
        // فیلتر کردن بر اساس دسته‌بندی (اگر دسته‌بندی انتخاب شده باشد)
        // if (selectedCategory) {
        //   data = data.filter(
        //     (blog) => blog.category === selectedCategory
        //   );
        // }

        // پیاده‌سازی صفحه‌بندی
        const startIndex = (currentPage - 1) * pageSize;
        const paginatedData = data.slice(startIndex, startIndex + pageSize);

        setBlogs(paginatedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage, selectedCategory, pageSize]);

    const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };
  // const handleCategoryChange = (newCategory) => {
  //   setActiveCategory(newCategory);
  //   setCurrentPage(1);
  //   Navigate(newCategory === "all" ? "/category/all" : `/category/${newCategory}`)
  // }




  return (
    <div >
        {/* {category section} */}
        <div>
            <CategorySections selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} activeCategory={activeCategory}/>
        </div>

        {/* {blogCard} */}
        <div className=" flex flex-col lg:flex-row gap-12">

            <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>


            {/* {sidebar componnet} */}

            <div>
              <SideBar/>
            </div>
        </div>

        {/* {pagination section} */}

        <div>
            <Pagination onePageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} totalPages={totalPages}/>
        </div>

        {/* <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1 px-4 py-2 bg-gray-300 hover:bg-orange-500 text-gray-800 rounded disabled:opacity-50"
        >
          قبلی
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
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
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="mx-1 px-4 py-2 bg-gray-300 hover:bg-orange-500 text-gray-800 rounded disabled:opacity-50"
        >
          بعدی
        </button>
      </div> */}
    </div>
  )
}

export default BlogPage