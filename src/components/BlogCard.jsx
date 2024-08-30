import { FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function BlogCard({blogs, pageSize, selectedCategory, currentPage}) {

     const filteredBlogs = blogs.filter((blog) => !selectedCategory || blog.category === selectedCategory)
                            .slice((currentPage -1) * pageSize, currentPage * pageSize)
    console.log(blogs);
    console.log('selected', selectedCategory);
    // const filteredBlogs = blogs.filter((blog) => !selectedCategory || blog.category === selectedCategory)
    // .slice((currentPage - 1) * pageSize, currentPage * pageSize);
    // const filteredBlogs = blogs;


  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
    {
        filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
      <Link key={blog.id} className='p-5 shadow-lg hover:shadow-2xl'>
        <div>
          <img src={blog.image} alt='' className='w-full' />
        </div>
        <h3 className='mt-4 mb-2 font-bold hover:text-orange-600 cursor-pointer'>
          {blog.title}
        </h3>
        <p className='mb-2 text-gray-600'>
          <FaUser className='inline-flex items-center mr-2' />
          {blog.author}
        </p>
        <p className='text-sm text-gray-500'>
          Published: {blog.published_date}
        </p>
      </Link>
    ))
        ) : 
          blogs.map((blog) => (
            <Link key={blog.id} className='p-5 shadow-lg hover:shadow-2xl'>
        <div>
          <img src={blog.image} alt='' className='w-full' />
        </div>
        <h3 className='mt-4 mb-2 font-bold hover:text-orange-600 cursor-pointer'>
          {blog.title}
        </h3>
        <p className='mb-2 text-gray-600'>
          <FaUser className='inline-flex items-center mr-2' />
          {blog.author}
        </p>
        <p className='text-sm text-gray-500'>
          Published: {blog.published_date}
        </p>
      </Link>
          ))
        
        
    }
    {/* {
        filteredBlogs.map((blog) => (
      <Link key={blog.id} className='p-5 shadow-lg hover:shadow-2xl'>
        <div>
          <img src={blog.image} alt='' className='w-full' />
        </div>
        <h3 className='mt-4 mb-2 font-bold hover:text-orange-600 cursor-pointer'>
          {blog.title}
        </h3>
        <p className='mb-2 text-gray-600'>
          <FaUser className='inline-flex items-center mr-2' />
          {blog.author}
        </p>
        <p className='text-sm text-gray-500'>
          Published: {blog.published_date}
        </p>
      </Link>
    ))
  } */}
</div>

  )
}

export default BlogCard