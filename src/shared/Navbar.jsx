import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosSearch } from "react-icons/io";
import { Element } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
   <Element name="navbar">
     <nav className="text-white z-10 py-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center w-full justify-center">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="before:w-0 hover:before:w-full before:bg-[#c8f21d] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#c8f21d] transition-all duration-300 before:left-0 cursor-pointer capitalize "
            >
              Home
            </Link>
            <Link
              to="/features"
              className="before:w-0 hover:before:w-full before:bg-[#c8f21d] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#c8f21d] transition-all duration-300 before:left-0 cursor-pointer capitalize"
            >
              Blogs
            </Link>
            <Link
              to="/blogs"
              className="before:w-0 hover:before:w-full before:bg-[#c8f21d] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#c8f21d] transition-all duration-300 before:left-0 cursor-pointer capitalize"
            >
              Contacts
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <Button className="py-1.5 px-3 text-sm sm:text-base bg-[#c8f21d] hover:bg-white capitalize text-black transition-all duration-300">
            Hire Me
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen} className="">
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-none bg-black text-white"
            >
              <SheetHeader>
                <Link
                  to={"/"}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src="/logo_icon.png"
                    alt="logo"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <div>
                    <p className="text-2xl sm:text-3xl lg:text-4xl">DevShine</p>
                  </div>
                </Link>
              </SheetHeader>
              <div className="flex flex-col space-y-4 px-5 mt-4">
                <div className="relative mb-5">
                  <input
                    className="py-2 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#c8f21d] text-sm sm:text-base"
                    placeholder="Search..."
                  />
                  <IoIosSearch className="absolute top-2.5 left-3 text-gray-500 text-lg sm:text-xl" />
                </div>
                <Link
                  to="/"
                  className="text-lg hover:text-blue-200 transition capitalize"
                  onClick={() => setIsOpen(false)}
                >
                  home
                </Link>
                <Link
                  to="/features"
                  className="text-lg hover:text-blue-200 transition capitalize"
                  onClick={() => setIsOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  to="/blogs"
                  className="text-lg hover:text-blue-200 transition capitalize"
                  onClick={() => setIsOpen(false)}
                >
                  Contacts
                </Link>
                <Button
                  className="py-1.5 px-3 text-sm sm:text-base bg-[#c8f21d] hover:bg-[#c8f21d]/90 capitalize text-black w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Hire Me
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
    </Element>
  );
};

export default Navbar;
