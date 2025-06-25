import { Link } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const Sidebar = () => (
  <div className="w-full bg-[#1f1f1f] py-10 px-5 text-white rounded-md flex flex-col gap-5 border border-gray-700">

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
     <div><img src="/Web-Design.jpg" alt="" className='h-[60px] w-[60px] rounded-full' /></div>
    <div>
        <p className='flex gap-2 items-center text-gray-400'> <SlCalender className='text-white' /> October 5, 2023</p>
        <p className='hover:text-[#c8f21d]'>Online Environment Work</p>
    </div>
   </div>
   <div className='flex gap-5 items-center mb-5'>
     <div><img src="/Web-Design.jpg" alt="" className='h-[60px] w-[60px] rounded-full' /></div>
    <div>
        <p className='flex gap-2 items-center text-gray-400'> <SlCalender className='text-white' /> October 5, 2023</p>
        <p className='hover:text-[#c8f21d]'>Online Environment Work</p>
    </div>
   </div>
   <div className='flex gap-5 items-center mb-5'>
     <div><img src="/Web-Design.jpg" alt="" className='h-[60px] w-[60px] rounded-full' /></div>
    <div>
         <p className='flex gap-2 items-center text-gray-400'> <SlCalender className='text-white' /> October 5, 2023</p>
        <p className='hover:text-[#c8f21d]'>Online Environment Work</p>
    </div>
   </div>



  </div>
);

export default Sidebar;