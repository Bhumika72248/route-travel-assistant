import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">Route & Travel Assistant</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/plan" className="hover:text-gray-300">Plan Trip</Link></li>
          <li><Link to="/weather" className="hover:text-gray-300">Weather</Link></li>
          <li><Link to="/sos" className="hover:text-gray-300">SOS</Link></li>
          <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
