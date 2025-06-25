
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { Link } from 'react-scroll';

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
                <ul class="flex text-white flex-wrap gap-4">
                  <li>
                    <a href="#" class="hover:text-yellow-400">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-yellow-400">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:text-yellow-400">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>

              {/* input  */}
              <div class="flex gap-3 mt-10 lg:w-2/3">
                <Input type="email" placeholder="Email" className="w-2/3 border-[#c8f21d] focus:border-black text-[#c8f21d]" />
                <Button type="submit" variant="outline" className="w-1/3 bg-[#c8f21d] text-black hover:bg-white">
                  Sign Up <FaAngleRight/>
                </Button>
              </div>
            </div>

            {/* Adress  */}
            <div className="lg:w-[20%] ">
              <div className="space-y-5">
                <h3 class="text-[1.2rem] font-semibold text-white mb-5">
                  Address
                </h3>
                <p class="flex items-center">
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
         <div class="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center max-w-7xl mx-auto">
            <p>Copyright @2025, <span className="text-[#c8f21d]">DevShine</span> All Rights Reserved</p>
            <div class="flex space-x-5">
              <a href="#" class="hover:text-[#c8f21d]">Facebook</a>
              <a href="#" class="hover:text-[#c8f21d]">Twitter</a>
              <a href="#" class="hover:text-[#c8f21d]">Instagram</a>
              <a href="#" class="hover:text-[#c8f21d]">LinkedinIn</a>
            </div>
          </div>
    </div>
    </footer>
  );
};

export default ResponsiveFooter;
