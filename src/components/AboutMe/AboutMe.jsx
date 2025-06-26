import { FaEnvelope, FaPhone } from "react-icons/fa";

import { RiCheckDoubleFill } from "react-icons/ri";

const AboutMe = () => {
  const services = [
    "UI/UX DESIGN",
    "WEB DEVELOPMENT",
    "PRODUCT DESIGN",
    "BRANDING & DESIGN",
  ];

  return (
    <div className="py-10 bg-black w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className=" gap-10 flex  lg:flex-row flex-col-reverse">
          {/* Image div */}
          <div className="w-full relative  flex justify-center lg:justify-start">
            <div>
              <img
                src="/about.jpg"
                alt="Profile"
                className="w-full max-w-md h-auto rounded-lg object-cover"
              />
            </div>

            <div className="absolute top-[200px] right-16 bg-white text-black rounded-lg p-3 lg:flex items-center space-x-2 shadow-lg hidden ">
              <img
                src="/figma-1.png" 
                alt="figma"
                className="w-6 h-6 rounded-full"
              />
              <span className="font-semibold">Professional Designer</span>
            </div>
            <div className="absolute bottom-[150px] right-2 bg-white text-black rounded-lg p-3 lg:flex items-center space-x-2 shadow-lg hidden">
              <img
                src="/coading.jpg" 
                alt="Profile"
                className="w-6 h-6 rounded-full"
              />
              <span className="font-semibold">Experienced Developer</span>
            </div>
          </div>

          {/* Text side */}
          <div className="w-full flex flex-col  gap-4 justify-start items-start text-left">
            <p className="text-gray-400 text-base sm:text-lg tracking-wider mb-4">
              About Me
            </p>
            {/* title  */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider  mb-4">
              Best <span className="text-[#c8f21d]">UI/UX Designer & </span>
              <span className="text-[#c8f21d]">Developer</span> in Bangladesh
            </h1>

            {/* description  */}
            <p className="mb-6 text-gray-400 text-sm sm:text-lg tracking-wider">
              At DevShine, we understand that success is just about delivering a
              product- its about building relationships and making meaningful
              impact of client{" "}
            </p>

            {/* services  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 w-full">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-start"
                >
                  <RiCheckDoubleFill className="text-[#c8f21d] text-2xl" />
                  <span className="text-gray-400 text-xl">{service}</span>
                </div>
              ))}
            </div>

            {/* contact card  */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full justify-center items-center lg:justify-start">
              <div className="flex flex-col lg:flex-row  items-center justify-between bg-[#1f1f1f] py-5 px-10 rounded-lg hover:bg-gray-700 transition-colors  gap-10">
                {/* email */}
                <p className="flex items-center text-start gap-2">
                  <p className="rounded-full bg-[#c8f21d]">
                    <FaEnvelope className="text-black text-5xl p-2 " />
                  </p>
                  <p>
                    <span className="text-gray-400 text-sm">Email Us</span>
                    <br />
                    <span className="text-xl">support@gmail.com</span>
                  </p>
                </p>

                {/* call  */}
                <p className="flex items-center gap-2 text-start">
                  <p className="rounded-full bg-[#c8f21d]">
                    <FaPhone className="text-black text-5xl p-2 " />
                  </p>
                  <p>
                    <span className="text-gray-400 text-sm">Make a Call</span>
                    <br />
                    <span className="text-xl">+8801627142598</span>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
