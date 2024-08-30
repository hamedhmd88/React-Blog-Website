import { NavLink } from "react-router-dom"

// react icons
import { FaFacebook, FaDribbble, FaTwitter, FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    //navitems
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/servises", link: "Servises"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/contact", link: "Contact"},
    ]
  return (
    <>
        <header className=" backdrop-blur-md bg-gradient-to-r from-black via-gray-900 to-black bg-black bg-opacity-50 text-white fixed top-0 left-0 right-0 z-50  shadow-xl">
            <nav className=" px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                <a href="/" className=" text-xl font-bold text-white">Design <span className=" text-orange-600">CR7 </span></a>

                {/* {navitems for lg device } */}

                <ul className=" md:flex gap-12 text-lg hidden">
                    {
                        navItems.map((item) => (
                            <>
                            <li key={item.path} className=" text-white">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                                 to={item.path}>
                                 {item.link}
                                 </NavLink>
                            </li>
                            </>
                        ))
                    }
                </ul>

                {/* {menu icons} */}
                <div className=" text-white lg:flex gap-4 items-center hidden">
                    <a href="/" className=" hover:text-orange-500"><FaFacebook/></a>
                    <a href="/" className=" hover:text-orange-500"><FaDribbble/></a>
                    <a href="/" className=" hover:text-orange-500"><FaTwitter/></a>
                    <button className=" bg-orange-500 ml-4 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
                        Log in
                    </button>
                </div>

                {/* {mobile menu btn, mobile screen} */}
                    <div className=" md:hidden">
                        <button onClick={toggleMenu} className=" cursor-pointer">
                            {
                                isMenuOpen ? <FaXmark className=" w-5 h-5"/> : <FaBars className=" w-5 h-5" />
                            }
                        </button>
                    </div>
            </nav>

            {/* {menu items only for mobile screen} */}
            <div>
                <ul className={`md:hidden gap-9  text-lg flex flex-col items-center justify-center space-y-4 px-4 py-6 mt-14 backdrop-blur-3xl bg-gradient-to-l  from-slate-950  via-slate-950   bg-slate-950 bg-opacity-60 ${isMenuOpen ? " fixed top-0 right-0 w-[50%] transition-all ease-in-out duration-400" : " hidden"}`}>
                {
                        navItems.map((item) => (
                            <>
                            <li key={item.path} className=" text-white">
                                <NavLink
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                } 
                                to={item.path}>{item.link}</NavLink>
                            </li>
                            </>
                        ))
                    }
                </ul>
            </div>
        </header>
    </>
  )
}

export default Navbar