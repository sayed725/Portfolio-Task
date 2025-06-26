
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; 

const PopularServices = () => {
  const services = [
    {
      id: "01",
      title: "Brand Identity Design",
      desc: "Craft unique brand visuals",
    },
    { id: "02", title: "Website Design", desc: "Design responsive user sites" },
    {
      id: "03",
      title: "Mobile Application Design",
      desc: "Create intuitive app interfaces",
    },
    {
      id: "04",
      title: "Motion Graphics Design",
      desc: "Produce dynamic visual animations",
    },
    {
      id: "05",
      title: "Website Development",
      desc: "Build scalable web solutions",
    },
    {
      id: "06",
      title: "SEO & Digital Marketing",
      desc: "Boost online marketing reach",
    },
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
    <div className="py-10 lg:py-20 w-11/12 mx-auto bg-black rounded-md">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-gray-400 text-base sm:text-lg lg:text-center tracking-wider mb-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Popular Services
        </motion.p>
        {/* title */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider lg:text-center mb-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          My <span className="text-[#c8f21d]">Special Service </span>
          For Your <br className="hidden lg:block" /> Business Development
        </motion.h1>

        {/* cards */}
        <motion.div
          className="bg-black py-10"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-[#1f1f1f] rounded-lg p-5 lg:p-10 transition-colors border-2 border-gray-700 hover:border-2 hover:border-[#c8f21d]"
                variants={fadeInUp}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <span className="text-2xl font-semibold text-white">
                      {service.id}
                    </span>
                    <div className="space-y-5">
                      <h3 className="text-2xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{service.desc}</p>
                    </div>
                  </div>
                  <Link to="#" className="text-white rounded-full bg-black hover:bg-[#c8f21d] transition-colors hover:text-black p-2">
                    <MdArrowOutward size={30} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PopularServices;