import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { NavLink, useLocation } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosSearch } from "react-icons/io";
import { Element, Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  // console.log(location.pathname);

  // eslint-disable-next-line no-unused-vars
  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3 } },
    exit: { x: "100%", transition: { duration: 0.3 } },
  };

  return (
    <Element name="navbar">
      <nav className="text-white z-10 py-5">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <NavLink to="/" className="flex items-center gap-2 cursor-pointer">
              <img
                src="/logo_icon.png"
                alt="logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl">DevShine</p>
              </div>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation with animation */}
          <motion.div
            className="hidden md:flex items-center w-full justify-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center space-x-4">
              <motion.div variants={itemVariants}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `before:w-0 hover:before:w-full before:bg-[#c8f21d] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#c8f21d] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                      isActive ? "text-[#c8f21d]" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `before:w-0 hover:before:w-full before:bg-[#c8f21d] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#c8f21d] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                      isActive ? "text-[#c8f21d]" : ""
                    }`
                  }
                >
                  Services
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `before:w-0 hover:before:w-full before:bg-[#c8f21d] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#c8f21d] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                      isActive ? "text-[#c8f21d]" : ""
                    }`
                  }
                >
                  Blog
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} animate="visible">
            {location.pathname === "/" ? (
              <Link to="contact" smooth={true} duration={700}>
                <Button className="py-1.5 px-3 text-sm sm:text-base bg-[#c8f21d] hover:bg-white capitalize text-black transition-all duration-300 hidden lg:block">
                  Contact Me
                </Button>
              </Link>
            ) : (
              <a
                href="https://www.linkedin.com/in/abu-sayed-khan-922801317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <Button className="py-1.5 px-3 text-sm sm:text-base bg-[#c8f21d] hover:bg-white capitalize text-black transition-all duration-300 hidden lg:block">
                  Contact Me
                </Button>
              </a>
            )}
          </motion.div>

          {/* Mobile Hamburger Menu with animation */}
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
              <AnimatePresence>
                {isOpen && (
                  <SheetContent
                    side="right"
                    className="border-none bg-black text-white"
                    as={motion.div}
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <SheetHeader>
                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <NavLink
                          to="/"
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <img
                            src="/logo_icon.png"
                            alt="logo"
                            className="w-8 h-8 sm:w-10 sm:h-10"
                          />
                          <div>
                            <p className="text-2xl sm:text-3xl lg:text-4xl">
                              DevShine
                            </p>
                          </div>
                        </NavLink>
                      </motion.div>
                    </SheetHeader>
                    <div className="flex flex-col space-y-4 px-5 mt-4">
                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative mb-5"
                      >
                        <input
                          className="py-2 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#c8f21d] text-sm sm:text-base"
                          placeholder="Search..."
                        />
                        <IoIosSearch className="absolute top-2.5 left-3 text-gray-500 text-lg sm:text-xl" />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            `text-lg hover:text-blue-200 transition capitalize ${
                              isActive ? "text-[#c8f21d]" : ""
                            }`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          home
                        </NavLink>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <NavLink
                          to="/services"
                          className={({ isActive }) =>
                            `text-lg hover:text-blue-200 transition capitalize ${
                              isActive ? "text-[#c8f21d]" : ""
                            }`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          Services
                        </NavLink>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <NavLink
                          to="/blog"
                          className={({ isActive }) =>
                            `text-lg hover:text-blue-200 transition capitalize ${
                              isActive ? "text-[#c8f21d]" : ""
                            }`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          Blog
                        </NavLink>
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {location.pathname === "/" ? (
                          <Link to="contact" smooth={true} duration={700}>
                            <Button
                              onClick={() => setIsOpen(false)}
                              className="py-1.5 px-3 text-sm sm:text-base bg-[#c8f21d] hover:bg-white capitalize text-black transition-all duration-300 "
                            >
                              Contact Me
                            </Button>
                          </Link>
                        ) : (
                          <a
                            href="https://www.linkedin.com/in/abu-sayed-khan-922801317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                          >
                            <Button
                              onClick={() => setIsOpen(false)}
                              className="py-1.5 px-3 text-sm sm:text-base bg-[#c8f21d] hover:bg-white capitalize text-black transition-all duration-300"
                            >
                              Contact Me
                            </Button>
                          </a>
                        )}
                      </motion.div>
                    </div>
                  </SheetContent>
                )}
              </AnimatePresence>
            </Sheet>
          </div>
        </div>
      </nav>
    </Element>
  );
};

export default Navbar;
