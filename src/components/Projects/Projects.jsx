import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";
import { Element } from "react-scroll";

const Projects = () => {
  const projects = [
    {
      title: "Mobile Application Design",
      description: "We craft innovative solutions to enhance user experiences and meet your business goals.",
      image: "/project-1.jpg",
      link: "#",
    },
    {
      title: "Website Makeup Design",
      description: "Building robust web applications that drive engagement and deliver results.",
      image: "/project-2.jpg",
      link: "#",
    },
    {
      title: "Brand Identity and Motion Design",
      description: "We craft innovative solutions to enhance user experiences and meet your business goals.",
      image: "/project-1.jpg",
      link: "#",
    },
    {
      title: "Mobile Application Development",
      description: "Building robust web applications that drive engagement and deliver results.",
      image: "/project-2.jpg",
      link: "#",
    },
  ];

  return (
   <Element name="projects">
     <div className="py-10 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* title */}
        <p className="text-gray-400 text-base sm:text-lg tracking-wider mb-4 lg:text-center">
         Latest Works
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold lg:text-center tracking-wider mb-4">
          Explore My Popular <span className="text-[#c8f21d]">Projects</span>
        </h1>

        {/* content & img */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`gap-10 lg:gap-30 flex flex-col ${
              index === 1 || index == 3 ? "lg:flex-row-reverse" : "lg:flex-row"
            } py-10`}
          >
            {/* Image div */}
            <div className="w-full flex justify-center lg:justify-start">
              <img
                src={project.image}
                alt="Profile"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Text side */}
            <div className="w-full flex flex-col gap-2 sm:gap-4 justify-center items-start text-left">
              <p className="text-[#c8f21d] text-base sm:text-lg tracking-wider">
                Project Design
              </p>
              {/* title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider mb-4">
                {project.title}
              </h1>

              {/* description */}
              <p className="mb-6 text-gray-400 text-sm sm:text-lg tracking-wider">
                {project.description}
              </p>

              <Link to={project.link} className="text-white rounded-full bg-black hover:bg-[#c8f21d] transition-colors hover:text-black p-2">
                <MdArrowOutward size={30} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Element>
  );
};

export default Projects;