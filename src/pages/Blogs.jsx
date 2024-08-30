import BlogPage from "../components/BlogPage"

function Blogs() {
  return (
    <>
        <div className=" px-4 py-40 backdrop-blur-md bg-gradient-to-r from-black via-gray-900 to-black bg-black bg-opacity-50 shadow-xl ">
            <div className=" text-white text-center">
                <h3 className="text-5xl lg:text-7xl leading-snug font-bold mb-5"> Blog Page</h3>
            </div>
        </div>

        {/* {all blogs container} */}
        <div className=" max-w-7xl mx-auto">
            <BlogPage/>
        </div>

    </>    
  )
}

export default Blogs