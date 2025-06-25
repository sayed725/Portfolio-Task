const BlogCard = ({ title, category, date, imageUrl }) => (
  <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
    <div className="mt-2">
        <p className="text-sm text-gray-400">{category}</p>
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  </div>
);

export default BlogCard;