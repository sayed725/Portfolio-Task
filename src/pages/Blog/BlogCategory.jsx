import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router';

const BlogCategory = () => {
    return (
        <div className='flex flex-col gap-5'>
             <h2 className="text-2xl  mt-4 mb-2">Category</h2>
    <ul className="space-y-5">
      {["Web Design", "Mobile Apps Design", "Brand Identity Design", "Motion Graphic Design", "Web Development", "Digital Marketing"].map((item) => (
        <li key={item} className="">
          <Link to={'#'} className='flex gap-2 items-center text-gray-400 hover:text-[#c8f21d]'><FaAngleRight/> {item}</Link>
        </li>
      ))}
    </ul>
        </div>
    );
};

export default BlogCategory;