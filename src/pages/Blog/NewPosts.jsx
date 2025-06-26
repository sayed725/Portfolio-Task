import React from "react";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router";

const NewPosts = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl  mt-4 mb-2">Latest News</h2>

      <div className="flex gap-5 items-center mb-5">
        <div>
          <img
            src="/Web-Design.jpg"
            alt="img"
            className="h-[60px] w-[60px] rounded-full"
          />
        </div>
        <div>
          <p className="flex gap-2 items-center text-gray-400">
            {" "}
            <SlCalender className="text-white" /> June 22, 2025
          </p>
          <Link to={'#'} className="hover:text-[#c8f21d]">Online Environment Work</Link>
        </div>
      </div>
      <div className="flex gap-5 items-center mb-5">
        <div>
          <img
            src="/Web-Developer.jpg"
            alt="img"
            className="h-[60px] w-[60px] rounded-full"
          />
        </div>
        <div>
          <p className="flex gap-2 items-center text-gray-400">
            {" "}
            <SlCalender className="text-white" /> June 23, 2025
          </p>
          <Link to={'#'} className="hover:text-[#c8f21d]">
            Usability With Participants
          </Link>
        </div>
      </div>
      <div className="flex gap-5 items-center mb-5">
        <div>
          <img
            src="/coading.jpg"
            alt="img"
            className="h-[60px] w-[60px] rounded-full"
          />
        </div>
        <div>
          <p className="flex gap-2 items-center text-gray-400">
            {" "}
            <SlCalender className="text-white" />
            June 25, 2025
          </p>
          <Link to={'#'} className="hover:text-[#c8f21d]">
            Tips For Conducting Study
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewPosts;
