import { FaDownload, FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="w-11/12 mx-auto lg:w-1/2 text-center lg:text-left">
          <p className="text-[#666666] text-lg tracking-wider sm:text-xl">
            Hello, I’m 
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mt-5 sm:mt-6 lg:mt-8">
            <span className="text-[#c8f21d]">Alex Robert</span>
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold mt-4 sm:mt-4 lg:mt-10 tracking-wider">
            A UI/UX DESIGNER <br /><span className="italic">& DEVELOPER</span>
          </h1>
          <p className=" mt-10 text-gray-400 tracking-wider sm:text-lg text-justify lg:text-start  mx-auto lg:mx-0">
            As a dedicated professional an with a passion for Sift, i bring 10+ years of experience in UI/UX designer & developer throughout best of my carrer
          </p>

          <div className="flex gap-4 sm:gap-8 py-10 justify-center lg:justify-start">
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
                className="hover:text-[#c8f21d] text-4xl"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="mt-5 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="https://drive.google.com/file/d/17pitcf77uvbny3y3idpI2pZWUwqmVUJP/view?usp=sharing"
              target="_blank"
            >
              <Button className="bg-[#c8f21d] text-black text-xl  py-6 hover:bg-[#c8f21d]">
                Download Resume <FaDownload className="text-2xl" />
              </Button>
            </a>
            <div>
              <Link to="/projects">
                <Button variant="outline" className="rounded-md font-semibold text-black w-full text-xl py-6">
                  Browse Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <div className=" bg-[url(/bg_img_home.png)] relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center overflow-hidden">
            <img
              src="/home.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;