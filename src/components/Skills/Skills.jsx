import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Skills = () => {

    const skills = [
    { name: "Figma", percentage: "95%", icon: "/figma-1.png" },
    { name: "Framer", percentage: "83%", icon: "/public/framer-1.png" },
    { name: "Photoshop", percentage: "93%", icon: "/photoshop-1.png" },
    { name: "WordPress", percentage: "84%", icon: "/Vector.png" },
    { name: "Angular", percentage: "65%", icon: "/angular-icon-1.png" },
    { name: "WebFlow", percentage: "86%", icon: "/webflow-icon-1.png" },
    { name: "Python", percentage: "62%", icon: "/python-icon-1.png" },
    { name: "Sketch", percentage: "94%", icon: "/sketchapp-icon-1.png" },
  ];


  return (
    <div className="py-10 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">


          {/* Text side */}
          <div className="w-full flex flex-col  gap-4 justify-center items-start text-left">
            <p className="text-gray-400 text-base sm:text-lg tracking-wider mb-4">
              My Skills
            </p>
            {/* title  */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider  mb-4">
              Let’s Explore Popular{" "}
              <span className="text-[#c8f21d]">Skills & Experience </span>
            </h1>

            {/* description  */}
            <p className="mb-6 text-gray-400 text-sm sm:text-lg tracking-wider">
              We deliver innovative solutions with expertise, enhancing user
              satisfaction.Our team ensures business growth and client success
              through dedication.
            </p>

            {/* contact card */}
            <Button className="bg-[#c8f21d] text-black text-sm sm:text-base lg:text-lg py-2 sm:py-3 lg:py-5 hover:bg-white flex items-center lg:justify-center gap-1 sm:gap-2  ">
              Learn More <FaChevronRight />
            </Button>
          </div>


           {/* Image div */}
          <div className="w-full flex justify-center lg:justify-start">
           <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="bg-[#1f1f1f] border-2 border-gray-700 hover:border-[#c8f21d] rounded-lg  overflow-hidden">
            <CardContent className="p-2 text-center">
              <img src={skill.icon} alt={skill.name} className="mx-auto mb-2" />
              <h3 className="text-white text-lg font-medium">{skill.name}</h3>
              <div className="mt-2 bg-gray-800 rounded-lg p-3 flex items-center justify-center">
                <span className="text-white text-sm ">{skill.percentage}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
          </div>






        </div>
      </div>
    </div>
  );
};

export default Skills;
