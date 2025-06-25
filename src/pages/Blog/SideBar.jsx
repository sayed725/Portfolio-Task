import { Link } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Button } from "@/components/ui/button";



const Sidebar = () => (



  <div className="w-full bg-[#1f1f1f] py-5 px-5 text-white rounded-md flex flex-col gap-5 border border-gray-700">

    {/* input  */}
    <h2 className="text-2xl  mb-4">Search</h2>
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-4 bg-black text-[#c8f21d] border-none rounded-md"
      />
      <FaSearch className="absolute right-4 top-5 text-[#c8f21d]" />
    </div>

    {/* category  */}
    <h2 className="text-2xl  mt-4 mb-2">Category</h2>
    <ul className="space-y-5">
      {["Web Design", "Mobile Apps Design", "Brand Identity Design", "Motion Graphic Design", "Web Development", "Digital Marketing"].map((item) => (
        <li key={item} className="">
          <Link className='flex gap-2 items-center text-gray-400 hover:text-[#c8f21d]'><FaAngleRight/> {item}</Link>
        </li>
      ))}
    </ul>

    {/* new posts */}
    <h2 className="text-2xl  mt-4 mb-2">Latest News</h2>


   <div className='flex gap-5 items-center mb-5'>
     <div><img src="/Web-Design.jpg" alt="img" className='h-[60px] w-[60px] rounded-full' /></div>
    <div>
        <p className='flex gap-2 items-center text-gray-400'> <SlCalender className='text-white' /> June 22, 2025</p>
        <Link className='hover:text-[#c8f21d]'>Online Environment Work</Link>
    </div>
   </div>
   <div className='flex gap-5 items-center mb-5'>
     <div><img src="/Web-Developer.jpg" alt="img" className='h-[60px] w-[60px] rounded-full' /></div>
    <div>
        <p className='flex gap-2 items-center text-gray-400'> <SlCalender className='text-white' />  June 23, 2025</p>
        <Link  className='hover:text-[#c8f21d]'>Usability With Participants</Link >
    </div>
   </div>
   <div className='flex gap-5 items-center mb-5'>
     <div><img src="/coading.jpg" alt="img" className='h-[60px] w-[60px] rounded-full' /></div>
    <div>
         <p className='flex gap-2 items-center text-gray-400'> <SlCalender className='text-white' />June 25, 2025</p>
        <Link  className='hover:text-[#c8f21d]'>Tips For Conducting Study</Link >
    </div>
   </div>

   {/* tags  */}
    <h2 className="text-2xl  mt-4 mb-2">Popular Tags</h2>

    <div className="flex flex-wrap gap-2">
      {["Design", "Figma", "Apps", "Branding", "Development", "Digital", "Mobile Apps"].map((tag) => (
        <Button key={tag} className="text-gray-400 px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-[#c8f21d] hover:text-black transition-colors">
          {tag}
        </Button>
      ))}
    </div>

    {/* hire me  */}

     <div className="relative w-full h-96 bg-gray-800 rounded-xl overflow-hidden shadow-lg mt-10">
      <img
        src="/web-team.png"
        alt="Creative Team"
        className="absolute inset-0 w-full h-full object-cover filter brightness-50"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        <h3 className="text-[#c8f21d] text-lg font-semibold">Get A Quote</h3>
        <h2 className="text-white text-3xl font-bold mt-2">Looking For Creative Web Designer</h2>
        <Button className="mt-4  bg-[#c8f21d] text-black font-semibold rounded-md hover:bg-white transition">
          Hire Me &gt;
        </Button>
      </div>
    </div>
   



  </div>
);

export default Sidebar;