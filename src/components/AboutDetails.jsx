import user1 from "../assets/user-01.png"
import user2 from "../assets/user-02.png"
import user3 from "../assets/user-03.png"
import about from "../assets/about.png"


function AboutDetails() {
  return (
    <div className="container mx-auto p-4">
         {/* بخش بالایی: عکس سمت چپ و نوشته سمت راست */}
         <div className="flex flex-col lg:flex-row items-center mb-8">
           <div className="flex-1 mb-4 lg:mb-0">
             <img
               src={about}
               alt="Team working"
               className="w-full h-auto rounded-lg shadow-lg"
             />
           </div>
           <div className="flex-1 lg:pl-8 ">
            <h5 className=" mb-4 text-orange-500 font-medium">Who we are</h5>
             <h2 className="text-3xl font-bold mb-4">We provide quality articles and blogs</h2>
             <p className="text-gray-600 mb-4">
             Lorem Epsom is a mock text with an incomprehensible simplicity produced by the printing industry and used by graphic designers
             </p>
             <p className="text-gray-600">
             Printers and texts, but newspapers and magazines in columns and rows as necessary             
             </p>
           </div>
         </div>

         {/* بخش پایینی: نویسندگان */}
         <div>
           <h2 className="text-2xl font-bold mb-4"> Top Authors</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { name: ' Adrio Devid', title: 'Operations manager', image: user1 },
               { name: ' Rayna Mario', title: 'The editor', image: user2 },
               { name: 'David Tac ', title: 'Head of Publications ', image: user3 },
               { name: ' Mark Jacob', title: ' Head of Marketing', image: user1 }
             ].map((author, index) => (
               <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer mb-8 transition-all duration-200 hover:shadow-2xl">
                 <img src={author.image} alt={author.name} className="rounded-full w-24 h-24 mb-4" />
                 <h3 className="text-lg font-bold">{author.name}</h3>
                 <p className="text-gray-500">{author.title}</p>
               </div>
             ))}
           </div>
         </div>
       </div>
  )
}

export default AboutDetails