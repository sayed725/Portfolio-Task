import React, { useEffect } from "react";
import PageHeader from "../../shared/PageHeader";
import Sidebar from "./SideBar";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogData = [
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: " June 26, 2025",
      imageUrl: "/Web-Design.jpg",
    },
    {
      title:
        "Tips For Conducting to Usability Studies With Participants",
      category: "Design, Figma",
      date: " June 24, 2025",
      imageUrl: "/Web-Developer.jpg",
    },
    {
      title:
        "Tips For Conducting to Usability Studies With Participants",
      category: "Design, Figma",
      date: " June 23, 2025",
      imageUrl: "/Web-Design.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "June 21, 2025",
      imageUrl: "/Web-Developer.jpg",
    },
    {
      title:
        "Tips For Conducting to Usability Studies With Participants",
      category: "Design, Figma",
      date: " June 18, 2025",
      imageUrl: "/Web-Design.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: " June 15, 2025",
      imageUrl: "/Web-Developer.jpg",
    },
    {
      title:
        "Tips For Conducting to Usability Studies With Participants",
      category: "Design, Figma",
      date: " June 12, 2025",
      imageUrl: "/Web-Design.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: " June 10, 2025",
      imageUrl: "/Web-Developer.jpg",
    },
  ];

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="Popular Blog" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* blog cards  */}

          <div className="col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {blogData.map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  date={blog.date}
                  imageUrl={blog.imageUrl}
                  category={blog.category}
                />
              ))}
            </div>
          </div>

          {/* sidebar  */}
         <div className="">
             <Sidebar />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
