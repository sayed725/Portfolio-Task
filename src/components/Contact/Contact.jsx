import React, { useState } from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Element } from "react-scroll";


const Contact = () => {
  const services = [
    "2 Years Of Experience",
    "Professional Web Designer",
    "Mobile Apps Design",
    "Custom Design Support",
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'I would like to discussed',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
   <Element name="contact">
     <div className="py-10 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Text side */}
          <div className="lg:w-2/5 flex flex-col  gap-4 justify-center items-start text-left">
            <p className="text-gray-400 text-base sm:text-lg tracking-wider mb-4">
              Get In Touch
            </p>
            {/* title  */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider  mb-4">
              Let’s Talk About your
              <span className="text-[#c8f21d]"> Next Projects </span>
            </h1>

            {/* description  */}
            <p className="mb-6 text-gray-400 text-sm sm:text-lg tracking-wider">
              We’re thrilled to collaborate and bring your innovative web
              designs, mobile apps, and custom solutions to life!
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
          <div className="lg:w-3/5 ">
           <form onSubmit={handleSubmit} className="space-y-10 w-full">
        <div className="grid grid-cols-2 gap-10 justify-between items-center">
          <div>
            <label className="block font-medium mb-2 ">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              required
              onChange={handleChange}
              className="mt-1 p-3 lg:p-5 w-full bg-[#1f1f1f] text-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c8f21d]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Email Address <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              className="mt-1 p-3 lg:p-5 w-full bg-[#1f1f1f] text-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c8f21d]"
              placeholder="Your Email"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block  font-medium mb-2">Phone Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              required
              onChange={handleChange}
              className="mt-1 p-3 lg:p-5 w-full bg-[#1f1f1f] text-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c8f21d]"
              placeholder="Your Phone Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 p-3 lg:p-5 w-full bg-[#1f1f1f] text-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c8f21d]"
            >
              <option value="I would like to discussed">I would like to discussed</option>
              <option value="Project">Project</option>
              <option value="Support">Support</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block  font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-3 lg:p-5 w-full h-32 bg-[#1f1f1f] text-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c8f21d]"
            placeholder="Write a Message"
          />
        </div>

        <Button
          type="submit"
          className="w-1/2 bg-[#c8f21d] lg:py-6 text-black font-semibold lg:text-xl  rounded-lg hover:bg-white transition duration-200"
        >
          Send Us Message 
        </Button>
      </form>
          </div>
        </div>
      </div>
    </div>
   </Element>
  );
};

export default Contact;
