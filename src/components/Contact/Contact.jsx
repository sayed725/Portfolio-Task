import React from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";




const Contact = () => {

     const services = [
    "2 Years Of Experience",
    "Professional Web Designer",
    "Mobile Apps Design",
    "Custom Design Support"
  ];

   const handleSubmit = async (e) => {
    e.preventDefault();}


  return (
    <div className="py-10 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Text side */}
          <div className="w-full flex flex-col  gap-4 justify-center items-start text-left">
            <p className="text-gray-400 text-base sm:text-lg tracking-wider mb-4">
             Get In Touch
            </p>
            {/* title  */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider  mb-4">
              Let’s Talk For your 
              <span className="text-[#c8f21d]">Next Projects </span>
            </h1>

            {/* description  */}
            <p className="mb-6 text-gray-400 text-sm sm:text-lg tracking-wider">
              We’re thrilled to collaborate and bring your innovative web designs, mobile apps, and custom solutions to life!
            </p>

             {/* services */}
                       <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6 w-full">
                         {services.map((service, index) => (
                           <div
                             key={index}
                             className="flex items-center gap-3 sm:gap-5  lg:justify-start"
                           >
                             <span className="bg-[#c8f21d] rounded-full p-1 sm:p-2">
                               <FaCheck className="text-black text-xl sm:text-2xl lg:text-3xl" />
                             </span>
                             <span className="text-gray-400 text-base sm:text-lg lg:text-xl">
                               {service}
                             </span>
                           </div>
                         ))}
                       </div>
          </div>

          {/* Image div */}
          <div className="w-full  flex justify-center lg:justify-start">
            <form onSubmit={handleSubmit} className="pt-[20px]">
      <div>
        {/* First Name */}
        <div className="space-y-1">
          <Label className="text-[1rem] text-gray-900 font-[400]">
            Username
          </Label>
          <Input
            type="text"
            required
            placeholder="Enter your username"
          />
        </div>
      </div>
      {/* Email & Phone Number */}
      <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-6">
        {/* Email */}
        <div className="flex flex-col gap-[5px] w-full sm:w-[50%] space-y-1">
          <Label className="text-[1rem] text-gray-900 font-[400]">
            Email Address
          </Label>
          <Input
            type="email"
            required
            placeholder="Enter your email address"
          />
        </div>
        {/* Phone Number */}
        <div className="flex flex-col gap-[5px] w-full sm:w-[50%] space-y-1">
          <Label className="text-[1rem] text-gray-900 font-[400]">
            Phone Number
          </Label>
          <Input
            type="text"
            required
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      {/* Message */}
      <div className="flex flex-col gap-[5px] w-full mt-6 space-y-1">
        <Label className="text-[1rem] text-gray-900 font-[400]">
          Write Message
        </Label>
        <Textarea
          required
            placeholder="Write your message here"
        />
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-end mt-3"
      >
        <Button text={"Send Message"} />
      </button>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
