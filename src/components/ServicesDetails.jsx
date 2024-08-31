import { BiCustomize } from "react-icons/bi"
import { FaRegLightbulb } from "react-icons/fa"
import { FaRegGem, FaRegThumbsUp, FaRocket } from "react-icons/fa6"
import { FiMonitor } from "react-icons/fi"

function ServicesDetails() {
  return (
    <div className="container mx-auto p-4">
    {/* عنوان بخش سرویس‌ها */}
    <div className="text-center mb-8">
      <h2 className="text-3xl text-orange-500 font-bold mb-4">Our Services</h2>
      <p className="text-gray-600">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.<br/>We provide quality articles and blogs</p>
    </div>

    {/* لیست سرویس‌ها */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="flex flex-col items-center p-4 bg-white rounded-lg  shadow-lg cursor-pointer hover:shadow-2xl">
        <FaRegLightbulb className="text-orange-500 text-4xl mb-4" />
        <h3 className="text-xl font-bold mb-2">Refreshing Design</h3>
        <p className="text-gray-600 text-center">We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.</p>
      </div>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg  shadow-lg cursor-pointer hover:shadow-2xl">
        <FaRocket className="text-orange-500 text-4xl mb-4" />
        <h3 className="text-xl font-bold mb-2">Based on Tailwind CSS</h3>
        <p className="text-gray-600 text-center">We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.</p>
      </div>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg  shadow-lg cursor-pointer hover:shadow-2xl">
        <FaRegGem className="text-orange-500 text-4xl mb-4" />
        <h3 className="text-xl font-bold mb-2">300+ Components</h3>
        <p className="text-gray-600 text-center">We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.</p>
      </div>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg  shadow-lg cursor-pointer hover:shadow-2xl">
        <FiMonitor className="text-orange-500 text-4xl mb-4" />
        <h3 className="text-xl font-bold mb-2">Speed Optimized</h3>
        <p className="text-gray-600 text-center">We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.</p>
      </div>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg  shadow-lg  cursor-pointer hover:shadow-2xl">
        <BiCustomize className="text-orange-500 text-4xl mb-4" />
        <h3 className="text-xl font-bold mb-2">Fully Customizable</h3>
        <p className="text-gray-600 text-center">We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.</p>
      </div>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg  shadow-lg cursor-pointer hover:shadow-2xl">
        <FaRegThumbsUp className="text-orange-500 text-4xl mb-4" />
        <h3 className="text-xl font-bold mb-2">Regular Updates</h3>
        <p className="text-gray-600 text-center">We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.</p>
      </div>
    </div>
  </div>
  )
}

export default ServicesDetails