import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";

function Banner() {
  return (
    <div className=" px-4 py-32 backdrop-blur-md bg-gradient-to-r from-black via-gray-900 to-black bg-black bg-opacity-50 shadow-xl mx-auto">
        <div className=" text-white text-center">
            <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Welcome to Our Blog</h1>
            <p className=" text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
                Start your blog today and join a community of writers and readers who are passsionate about sharing their stories and ideas. We offer everything you need to get started, from helful tips and tutorials
            </p>
            <div>
                <Link to='/' className=" bg-orange-500 ml-4 px-6 mt-4 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in inline-flex items-center py-2">
                    Learn more <FaArrowRight className=" mt-1 ml-2"/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner