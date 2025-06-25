import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Sidebar = () => (
  <div className="w-1/4 bg-gray-900 p-4 text-white">
    <h2 className="text-lg font-bold mb-4">Search</h2>
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 bg-gray-800 text-white rounded"
      />
      <FaSearch className="absolute right-2 top-2 text-yellow-400" />
    </div>
    <h2 className="text-lg font-bold mt-6 mb-2">Category</h2>
    <ul className="space-y-2">
      {["Web Design", "Mobile Apps Design", "Brand Identity Design", "Motion Graphic Design", "Web Development", "Digital Marketing"].map((item) => (
        <li key={item} className="hover:text-yellow-400">
          <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`}>{item}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;