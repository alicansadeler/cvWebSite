import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-0 py-2  sm:space-y-0">
      <div className="flex items-center space-x-2">
        <div className="w-14 h-14 bg-custom-headerdaire rounded-full flex items-center justify-center">
          <span className="text-custom-daire font-semibold text-xl rotate-[25deg]">
            A
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-16 ">
        <nav className="flex space-x-16">
          <Link
            to="/profiles"
            className="text-custom-navbartext hover:text-gray-800"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-custom-navbartext hover:text-gray-800"
          >
            Projects
          </Link>
          <Link to="/" className="text-custom-navbartext hover:text-gray-800">
            Contact
          </Link>
        </nav>
        <Link
          className="px-4 py-2 text-custom-link border-1  border-custom-link rounded-md hover:text-custom-link  w-full sm:w-auto text-center"
          to="/"
        >
          Hire me
        </Link>
      </div>
    </header>
  );
};

export default Header;
