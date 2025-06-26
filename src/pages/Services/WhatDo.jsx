
import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; 
const WhatDo = () => {
  const services = [
    "2 Years Of Experience",
    "Professional Web Designer",
    "Professional Web Developer",
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="py-6 sm:py-10 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="lg:grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 flex flex-col lg:flex-row"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Image div */}
          <motion.div
            className="w-full lg:relative flex justify-center lg:justify-start"
            variants={stagger}
          >
            <motion.img
              src="/services-DQA28KJ.jpg"
              alt="Profile"
              className="w-full max-w-md h-[300px] sm:h-[400px] lg:h-[450px] lg:absolute rounded-lg object-cover z-10"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            />
            <motion.img
              src="/services-5QY5DZN.jpg"
              alt="Profile"
              className="h-[250px] sm:h-[300px] lg:h-[330px] absolute bottom-0 right-2 sm:right-5 lg:right-10 rounded-lg object-cover z-20 hidden lg:block"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            />
            <motion.img
              src="/Group.png"
              alt="Profile"
              className="h-[60px] sm:h-[80px] absolute top-2 sm:top-5 lg:top-10 right-2 sm:right-5 lg:right-15 rounded-lg hidden lg:block"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            />
            <motion.img
              src="/Group.png"
              alt="Profile"
              className="h-[60px] sm:h-[80px] absolute bottom-0 left-2 sm:left-5 lg:left-10 rounded-lg hidden lg:block"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            className="w-full flex flex-col gap-4 items-start text-left"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-sm sm:text-base lg:text-lg tracking-wider mb-2 sm:mb-4"
            >
              What I Do
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl lg:text-5xl font-semibold tracking-wider mb-2 sm:mb-4"
            >
              Real <span className="text-[#c8f21d]">Problem Solution</span>{" "}
              Experience
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mb-4 text-gray-400 text-sm sm:text-base lg:text-lg tracking-wider"
            >
              At DevShine, I have 2 years of experience solving real-life
              problems and creating beautiful products for our customers.
            </motion.p>
            <motion.div
              variants={stagger}
              className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6 w-full"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 sm:gap-5 lg:justify-start"
                  variants={fadeInUp}
                >
                  <span className="bg-[#c8f21d] rounded-full p-1 sm:p-2">
                    <FaCheck className="text-black text-xl sm:text-2xl lg:text-3xl" />
                  </span>
                  <span className="text-gray-400 text-base sm:text-lg lg:text-xl">
                    {service}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link to="#">
                <Button className="bg-[#c8f21d] text-black text-sm sm:text-base lg:text-lg py-2 sm:py-3 lg:py-5 hover:bg-white flex items-center lg:justify-center gap-1 sm:gap-2">
                  Learn More <FaChevronRight />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatDo;