import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';


const AboutMe = () => {
  const services = ["Branding & Design", "Web Development", "Digital Marketing", "Product Design"];
  const contact = { email: "support@gmail.com", phone: "+880 (123) 456 88" };

  return (
    <div className="py-5 w-11/12 mx-auto bg-black">
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-7xl mx-auto'>


          {/* image div  */}
     <div className='w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-start relative'>
         <img src="/about.jpg" alt="Profile" className=" h-96 rounded-lg" />
     </div>





        {/* text side  */}
       <div className='w-full flex flex-col lg:justify-end'>
        <p className='text-gray-400 text-lg tracking-wider sm:text-xl mb-5'>About Me</p>
         <h1 className="text-4xl font-bold text-yellow-400 mb-4">Professional Problem Solutions For Digital Products</h1>
      <p className="mb-6 text-gray-300">Best UI/UX Designer & Developer in Bangladesh</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {services.map((service, index) => (
          <div key={index} className="flex items-center">
            <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 6a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            </svg>
            <span>{service}</span>
          </div>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href={`mailto:${contact.email}`} className="flex items-center bg-gray-800 p-2 rounded-lg">
          <FaEnvelope className="text-yellow-400 mr-2" />
          <span>{contact.email}</span>
        </a>
        <a href={`tel:${contact.phone}`} className="flex items-center bg-gray-800 p-2 rounded-lg">
          <FaPhone className="text-yellow-400 mr-2" />
          <span>{contact.phone}</span>
        </a>
      </div>
       </div>

    
      </div>
    </div>
  );
};

export default AboutMe;