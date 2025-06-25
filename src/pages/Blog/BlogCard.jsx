





const BlogCard = ({ title, category, date, imageUrl }) => (




  <div className="bg-[#1f1f1f] text-white p-5 rounded-md  border border-gray-700">
    {/* image  */}
    <img src={imageUrl} alt={title} className="w-full h-[270px] object-cover rounded-md" />
    {/* content  */}
    <div className="mt-10 flex flex-col gap-10">
        <p className="text-sm text-gray-400">{category}</p>
      <p className=" ">{title}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  </div>
);

export default BlogCard;