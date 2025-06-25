


import { RiCheckDoubleFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";



const WhatDo = () => {
  const services = [
    "UI/UX DESIGN",
    "WEB DEVELOPMENT",
    "PRODUCT DESIGN",
    "BRANDING & DESIGN",
  ];

  return (
    <div className="py-10 bg-black  mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-10 flex flex-col-reverse">
          {/* Image div */}
          <div className="w-full  flex justify-center lg:justify-start">
            <img
              src="/about.jpg"
              alt="Profile"
              className="w-full max-w-md h-auto rounded-lg object-cover"
            />
          </div>

          {/* Text side */}
          <div className="w-full flex flex-col items-center gap-4 lg:items-start text-center lg:text-left">
            <p className="text-gray-400 text-base sm:text-lg tracking-wider mb-4">
              What I Do
            </p>
            {/* title  */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider  mb-4">
              Real <span className="text-[#c8f21d]"> Problem Solution </span> 
               Experience
            </h1>

            {/* description  */}
            <p className="mb-6 text-gray-400 text-sm sm:text-lg tracking-wider">
              At DevShine,I have 2 years Experience of Solving Real life Problems and Make Beautiful Products for Our Customer{" "}
            </p>

            {/* services  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 w-full">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-center lg:justify-start"
                >
                  <RiCheckDoubleFill  className="text-[#c8f21d] text-2xl" />
                  <span className="text-gray-400 text-xl">{service}</span>
                </div>
              ))}
            </div>

            {/* contact card  */}
           <Button className="bg-[#c8f21d] text-black lg:text-lg lg:py-6 hover:bg-white flex items-center justify-center gap-2">
              Learn More <FaChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDo;
