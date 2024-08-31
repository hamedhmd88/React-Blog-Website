
function ContactDetails() {
  return (
    <div className="flex mx-auto flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-whitee to-orange-100 p-6">
      
    {/* بخش تصویر سمت چپ */}
    <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
      <img
        src="../assets/contact.png"
        alt="Contact Us"
        className=" w-full max-w-2xl object-cover rounded-lg "
      />
    </div>
    
    {/* فرم تماس */}
    <div className="lg:w-1/3 max-w-7xl bg-white p-8 rounded-lg shadow-2xl transform transition duration-500 ">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
      <form>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter your subject"
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          ></textarea>
        </div>

        <div>
          <button className="w-full bg-orange-500 text-white p-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ContactDetails