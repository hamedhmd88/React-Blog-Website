import { useEffect, useState } from "react";
import { FaClock, FaUser } from "react-icons/fa6";
import {  useParams } from "react-router-dom"
import SideBar from "../components/SideBar";

function SingleBlog() {
    // const data = useLoaderData();
    const {id} = useParams();
    const [blog, setBlog] = useState(null)
    
    useEffect(() => {
        fetch('/src/api/blogsData.json')
        .then(response => response.json())
        .then(data => {
            const founBlog = data.find((b) => b.id === parseInt(id));
            setBlog(founBlog)
        })
    }, [id])

    if(!blog) {
        return <h2>Blog is not found</h2>
    }


  return (
    <>
        <div className=" px-4 py-32 backdrop-blur-md bg-gradient-to-r from-black via-gray-900 to-black bg-black bg-opacity-50 mx-auto">
        <div className=" text-white text-center">
            <h3 className="text-5xl lg:text-7xl leading-snug font-bold mb-5"> Single Blog</h3> 
        </div>
        </div>

{/* {  blog details} */}


        <div className="max-w-7xl mx-auto my-12 px-4 flex flex-col md:flex-row gap-12 ">


        <div className='lg:w-3/4 mx-auto'>
    <div>
      <img src={blog.image} alt='' className='w-full mx-auto rounded' />
    </div>
    <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer hover:text-orange-500'>{blog.title}</h2>
    <p className='flex items-center text-gray-600 text-sm mb-4'>
      <FaUser className=' mr-2' />{blog.author} | {blog.published_date}
    </p>
    <p className='flex items-center text-gray-600 text-sm mb-6'>
      <FaClock className='mr-2' />{blog.reading_time}
    </p>
    <p className='text-base text-gray-500 mb-6'>{blog.content}</p>
    <div className='text-base text-gray-500'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, corrupti, doloremque 
        sequi esse eius, mollitia molestias minus odio sint harum sunt. Qui perferendis deleniti 
        architecto? Impedit nemo quo voluptatum optio?<br /><br />
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ex perferendis, 
        accusantium non laborum doloremque eos porro architecto quo reiciendis. Accusantium 
        tenetur voluptatibus aliquam nemo quas iure nisi totam optio!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium 
        assumenda voluptate facere eveniet incidunt, eius consectetur exercitationem magnam 
        vero corrupti, natus sint animi ut aspernatur ad. Sequi, enim recusandae!
      </p>
    </div>
  </div>




        

            <div className=" lg:w-1/2">
                <SideBar/>
            </div>

        </div>



    </>
   
  )
}

export default SingleBlog