import React, { useEffect } from "react";
import PageHeader from "../../shared/PageHeader";
import Sidebar from "./SideBar";
import BlogCard from "./BlogCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; 

const Blog = () => {
  const blogData = [
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "June 26, 2025",
      imageUrl: "/Web-Design.jpg",
    },
    {
      title: "Tips For Conducting to Usability Studies With Participants",
      category: "Design, Figma",
      date: "June 24, 2025",
      imageUrl: "/Web-Developer.jpg",
    },
    {
      title: "Tips For Conducting to Usability Studies With Participants",
      category: "Design, Figma",
      date: "June 23, 2025",
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
      title: "Tips For Conducting to Usability Studies With Participants",
      category: "Design, Figma",
      date: "June 18, 2025",
      imageUrl: "/Web-Design.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "June 15, 2025",
      imageUrl: "/Web-Developer.jpg",
    },
    {
      title: "Tips For Conducting to Usability Studies With Participants",
      category: "Design, Figma",
      date: "June 12, 2025",
      imageUrl: "/Web-Design.jpg",
    },
    {
      title:
        "Online Environment Work For Older Users systems ways Tips Usability Studies Pants",
      category: "Design, Figma",
      date: "June 10, 2025",
      imageUrl: "/Web-Developer.jpg",
    },
  ];

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <PageHeader title="Popular Blog" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* blog cards */}
          <motion.div className="col-span-2" variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {blogData.map((blog, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <BlogCard
                    title={blog.title}
                    date={blog.date}
                    imageUrl={blog.imageUrl}
                    category={blog.category}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* sidebar */}
          <motion.div variants={fadeInUp}>
            <Sidebar />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;