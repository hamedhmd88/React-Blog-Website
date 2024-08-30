function Modal({ isModalOpen, closeModal }) {
    return (
      <div
        className={`fixed inset-0 mt-[500px] flex items-center justify-center 
          ${isModalOpen ? "" : "hidden"}`}
      >
        {/* پس زمینه تیره */}
        <div className="fixed inset-0  bg-gray-700 opacity-5  z-10"></div>
        
        {/* محتوای مدال */}
        <div className="relative z-20 bg-gray-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-2xl">
          
          {/* دکمه ضربدر برای بستن مودال */}
          <button
            onClick={closeModal}
            className="absolute top-1 right-3 text-orange-700  rounded-sm text-[32px]"
          >
            &times;
          </button>
  
          {/* عنوان مودال */}
          <h2 className="text-xl font-semibold mt-6 mb-5 uppercase text-orange-500">
            Please Login Here!
          </h2>
  
          <form className="px-4">
            
            {/* ورودی ایمیل */}
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                font-medium text-gray-900 outline-none focus:border-orange-500 focus:shadow-md"
              />
            </div>
            
            {/* ورودی پسورد */}
            <div className="mb-5">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                font-medium text-gray-900 outline-none focus:border-orange-500 focus:shadow-md"
              />
            </div>
  
            {/* دکمه ارسال */}
            <div>
              <button className="hover:shadow-md rounded-md bg-orange-500 hover:bg-white text-black hover:text-orange-500 py-3 px-8 text-base font-semibold">
                Login
              </button>
            </div>
  
          </form>
        </div>
      </div>
    );
  }
  
  export default Modal;