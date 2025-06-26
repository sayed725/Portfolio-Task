
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { Link } from 'react-scroll';
import { NavLink } from "react-router";

const ResponsiveFooter = () => {
  return (
    <footer className="rounded-xl w-full py-5">
      <div className="bg-black text-white w-11/12 mx-auto">

      {/* footer content  */}
        <div className="max-w-7xl mx-auto py-10  lg:py-20">
          <div className="flex justify-center sm:justify-between gap-[30px] flex-wrap w-full">
            {/* logo  */}
            <div className="lg:w-[25%]">
              <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
                <img
                  src="/logo_icon.png"
                  alt="logo"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl">DevShine</p>
                </div>
              </Link>
            </div>

            {/* quick link  */}

            <div className="lg:w-[45%]">
              <h3 className="text-[1.2rem] font-semibold text-white mb-5">
                Quick Link
              </h3>
              <div className="">
                <ul class="flex text-gray-400 flex-wrap gap-4">
                  <li>
                    < NavLink to={'/'} className="hover:text-[#c8f21d]">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={'/services'} className="hover:text-[#c8f21d]">
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={'/blog'} className="hover:text-[#c8f21d]">
                      Blogs
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* input  */}
              <div class="flex gap-3 mt-10 lg:w-2/3 items-center">
                <input
              type="email"
              name="email"
              required
              onChange={() => {}}
              className=" p-2 w-full bg-[#1f1f1f] text-[#c8f21d] rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c8f21d]"
              placeholder="Your Email"
            />
                <Button  variant="outline" className="w-1/3 bg-[#c8f21d] text-black hover:bg-white">
                  Sign Up <FaAngleRight/>
                </Button>
              </div>
            </div>

            {/* Adress  */}
            <div className="lg:w-[20%] ">
              <div className="space-y-5 text-gray-400">
                <h3 class="text-[1.2rem] font-semibold text-white mb-5">
                  Address
                </h3>
                <p class="flex items-center ">
                  <FaMapMarkerAlt class="mr-3 text-[#c8f21d]" /> 55 Main Street,
                  2nd block, New York City
                </p>
                <p class="flex items-center mt-2">
                  <FaEnvelope class="mr-3 text-[#c8f21d]" />{" "}
                  abusayedkhan.pro@gmail.com
                </p>
                <p class="flex items-center mt-2">
                  <FaPhoneAlt class="mr-3 text-[#c8f21d]" /> +880 1627142598
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Link to="navbar" smooth={true} duration={700}
       className="flex justify-center items-center relative bottom-5">

      <Button className="py-5 px-5 bg-[#c8f21d] hover:bg-white text-black"><FaChevronUp/></Button>
      </Link>

      {/* copy right  */}
    <div className="w-11/12 mx-auto">
         <div class="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center max-w-7xl mx-auto text-gray-400">
            <p>Copyright @2025, <span className="text-[#c8f21d]">DevShine</span> All Rights Reserved</p>
            <div class="flex space-x-5">
              <a href="https://www.facebook.com/abu.ssayed.khan.2024"  target="_blank" class="hover:text-[#c8f21d]">Facebook</a>
              <a href="https://github.com/sayed725" target="_blank" class="hover:text-[#c8f21d]">Github</a>
              <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank" class="hover:text-[#c8f21d]">Instagram</a>
              <a href="https://www.linkedin.com/in/abu-sayed-khan-922801317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="hover:text-[#c8f21d]">LinkedinIn</a>
            </div>
          </div>
    </div>
    </footer>
  );
};

export default ResponsiveFooter;
