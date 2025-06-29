import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";


const BlogTags = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl  mt-4 mb-2">Popular Tags</h2>

      <div className="flex flex-wrap gap-2">
        {[
          "Design",
          "Figma",
          "Apps",
          "Branding",
          "Development",
          "Digital",
          "Mobile Apps",
        ].map((tag) => (
         <Link key={tag} to={'#'} >
          <Button
            className="text-gray-400 px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-[#c8f21d] hover:text-black transition-colors"
          >
            {tag}
          </Button></Link>
        ))}
      </div>
    </div>
  );
};

export default BlogTags;
