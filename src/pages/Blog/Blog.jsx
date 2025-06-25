import React from "react";
import PageHeader from "../../shared/PageHeader";
import Sidebar from "./SideBar";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogData = [
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "September 25, 2023",
      imageUrl: "/Web-Design.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "September 25, 2023",
      imageUrl: "/Web-Developer.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "September 25, 2023",
      imageUrl: "/Web-Design.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "September 25, 2023",
      imageUrl: "/Web-Developer.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "September 25, 2023",
      imageUrl: "/Web-Design.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "September 25, 2023",
      imageUrl: "/Web-Developer.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "September 25, 2023",
      imageUrl: "/Web-Design.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "September 25, 2023",
      imageUrl: "/Web-Developer.jpg",
    },
  ];

  return (
    <div className="min-h-screen w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="Blog" />

        <div className="grid grid-cols-3 gap-6">
          {/* blog cards  */}

          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-6">
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
