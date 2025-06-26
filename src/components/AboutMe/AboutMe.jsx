import { FaEnvelope, FaPhone } from "react-icons/fa";
import { RiCheckDoubleFill } from "react-icons/ri";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; 

const AboutMe = () => {
  const services = [
    "UI/UX Design",
    "Web Development",
    "Product Design",
    "Branding & Design",
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
    <div className="py-10 bg-black w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="gap-10 flex lg:flex-row flex-col-reverse"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Image div */}
          <motion.div
            className="w-full relative flex justify-center lg:justify-start"
            variants={fadeInUp}
          >
            <div>
              <img
                src="/about.jpg"
                alt="Profile"
                className="w-full max-w-md h-auto rounded-lg object-cover"
              />
            </div>

            <motion.div
              className="absolute top-[200px] right-16 bg-white text-black rounded-lg p-3 lg:flex items-center space-x-2 shadow-lg hidden"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <img
                src="/figma-1.png"
                alt="figma"
                className="w-6 h-6 rounded-full"
              />
              <span className="font-semibold">Professional Designer</span>
            </motion.div>
            <motion.div
              className="absolute bottom-[150px] right-2 bg-white text-black rounded-lg p-3 lg:flex items-center space-x-2 shadow-lg hidden"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <img
                src="/coading.jpg"
                alt="Profile"
                className="w-6 h-6 rounded-full"
              />
              <span className="font-semibold">Experienced Developer</span>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="w-full flex flex-col gap-4 justify-start items-start text-left"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg tracking-wider mb-4">
              About Me
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider mb-4">
              Best <span className="text-[#c8f21d]">UI/UX Designer & </span>
              <span className="text-[#c8f21d]">Developer</span> in Bangladesh
            </motion.h1>
            <motion.p variants={fadeInUp} className="mb-6 text-gray-400 text-sm sm:text-lg tracking-wider">
              At DevShine, we understand that success is just about delivering a
              product- its about building relationships and making meaningful
              impact of client
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 w-full">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 justify-start"
                  variants={fadeInUp}
                >
                  <RiCheckDoubleFill className="text-[#c8f21d] text-2xl" />
                  <span className="text-gray-400 text-xl">{service}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full justify-center items-center lg:justify-start">
              <div className="flex flex-col lg:flex-row items-center justify-between bg-[#1f1f1f] py-5 px-10 rounded-lg transition-colors gap-10">
                <motion.div variants={fadeInUp} className="flex items-center text-start gap-2">
                  <p className="rounded-full bg-[#c8f21d]">
                    <FaEnvelope className="text-black text-5xl p-2" />
                  </p>
                  <p>
                    <span className="text-gray-400 text-sm">Email Us</span>
                    <br />
                    <span className="text-xl">support@gmail.com</span>
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-center gap-2 text-start">
                  <p className="rounded-full bg-[#c8f21d]">
                    <FaPhone className="text-black text-5xl p-2" />
                  </p>
                  <p>
                    <span className="text-gray-400 text-sm">Make a Call</span>
                    <br />
                    <span className="text-xl">+8801627142598</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;