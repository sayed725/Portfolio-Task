import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import NewPosts from "./NewPosts";
import BlogCategory from "./BlogCategory";
import BlogTags from "./BlogTags";

const Sidebar = () => (
  <div className="w-full bg-[#1f1f1f] py-5 px-5 text-white rounded-md flex flex-col gap-5 border border-gray-700">
    {/* input  */}
    <h2 className="text-2xl  mb-4">Search</h2>
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-4 bg-black text-[#c8f21d] border-none rounded-md"
      />
      <FaSearch className="absolute right-4 top-5 text-[#c8f21d]" />
    </div>

    {/* category  */}
    <BlogCategory />

    {/* new posts */}
    <NewPosts />

    {/* tags  */}
    <BlogTags />

    {/* hire me  */}

    <div className="relative w-full h-96 bg-gray-800 rounded-xl overflow-hidden shadow-lg mt-10">
      <img
        src="/web-team.png"
        alt="Creative Team"
        className="absolute inset-0 w-full h-full object-cover filter brightness-50"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        <h3 className="text-[#c8f21d] text-lg font-semibold">Get A Quote</h3>
        <h2 className="text-white text-3xl font-bold mt-2">
          Looking For Creative Web Designer
        </h2>
        <Button className="mt-4  bg-[#c8f21d] text-black font-semibold rounded-md hover:bg-white transition">
          Hire Me &gt;
        </Button>
      </div>
    </div>
  </div>
);

export default Sidebar;
