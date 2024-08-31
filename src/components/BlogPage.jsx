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
    

        let url = `/api/blogsData.json`
        fetch(url)
      .then((response) => response.json())
      .then((data) => {

        // محاسبه تعداد کل صفحات
        setTotalPages(Math.ceil(data.length / pageSize));
  
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

  
    </div>
  )
}

export default BlogPage