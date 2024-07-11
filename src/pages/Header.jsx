import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-4 py-2 space-y-2 sm:space-y-0">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-purple-600 font-semibold">A</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <nav className="flex space-x-4">
          <Link to="/profiles" className="text-gray-600 hover:text-gray-800">
            Skills
          </Link>
          <Link to="/projects" className="text-gray-600 hover:text-gray-800">
            Projects
          </Link>
        </nav>
        <Link
          className="px-4 py-2 text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 w-full sm:w-auto text-center"
          to="/"
        >
          Hire me
        </Link>
      </div>
    </header>
  );
};

export default Header;
