import { FaDownload, FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Element } from 'react-scroll';

const Hero = () => {
  return (
   <Element name="hero">
     <section className="py-6 sm:py-8 lg:py-20 w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-400 text-lg tracking-wider sm:text-xl">
            Hello, I’m 👋
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider mt-5 sm:mt-6 lg:mt-8">
            <span className="text-[#c8f21d]">Alex Robert</span>
          </h1>
          <h1 className="text-3xl sm:text-3xl lg:text-6xl font-bold mt-4 sm:mt-4 lg:mt-5 tracking-wider">
            A UI/UX DESIGNER <br /><span className="italic">& DEVELOPER</span>
          </h1>
          <p className="mt-5 text-gray-400 tracking-wider text-sm sm:text-lg lg:text-justify  max-w-lg mx-auto lg:mx-0">
            As a dedicated professional with a passion for design, I bring 10+ years of experience in UI/UX design & development throughout the best of my career.
          </p>

          <div className="flex gap-4 sm:gap-8 py-5 justify-center lg:justify-start">
            {[
              { href: "https://www.linkedin.com/in/abu-sayed-khan-922801317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", Icon: FaLinkedin },
              { href: "https://github.com/sayed725", Icon: FaGithub },
              { href: "https://www.facebook.com/abu.ssayed.khan.2024", Icon: FaFacebook },
              { href: "https://www.instagram.com/abu.ssayed.khan.2024", Icon: FaInstagram },
              { href: "https://wa.me/+8801627142598", Icon: FaWhatsapp },
            // eslint-disable-next-line no-unused-vars
            ].map(({ href, Icon }, i) => (
              <a
                key={href}
                href={href}
                target="_blank"
                className="hover:text-[#c8f21d] text-3xl lg:text-4xl"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="mt-5 flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-6 lg:gap-4">
            <a
              href="https://drive.google.com/file/d/17pitcf77uvbny3y3idpI2pZWUwqmVUJP/view?usp=sharing"
              target="_blank"
            >
              <Button className="bg-[#c8f21d] text-black lg:text-lg lg:py-6 hover:bg-white flex items-center justify-center gap-2  sm:w-auto">
                Download Resume <FaDownload className="text-2xl" />
              </Button>
            </a>
            <div>
              <Link to="/projects">
                <Button variant="ghost" className="rounded-md font-semibold text-white lg:text-lg lg:py-6 border-[#c8f21d] hover:text-black w-full sm:w-auto">
                  Browse Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square">
            <div
              className="absolute inset-0 bg-[url('/bg_img_home.png')] bg-cover bg-center bg-no-repeat rounded-full"
              style={{ zIndex: 0 }}
            ></div>
            <img
              src="/home.png"
              alt="Profile"
              className="relative z-10 w-full h-full  rounded-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
   </Element>
  );
};

export default Hero;