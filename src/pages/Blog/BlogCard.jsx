import { Link } from "react-router";






const BlogCard = ({ title, category, date, imageUrl }) => (




  <div className="bg-[#1f1f1f] text-white p-5 rounded-lg  border border-gray-700 hover:scale-105 transition-transform duration-300">
    {/* image  */}
    <img src={imageUrl} alt={title} className="w-full h-[270px] object-cover rounded-lg" />
    {/* content  */}
    <div className="mt-10 flex flex-col gap-5">
        <p className="text-sm text-gray-400">{category}</p>
      <Link to={'#'} className="hover:text-[#c8f21d] text-lg ">{title}</Link>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  </div>
);

export default BlogCard;