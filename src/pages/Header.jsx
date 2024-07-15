import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const data = useSelector((store) => store.data[0][0]);
  const headerData = data["header"];

  return (
    <header className="flex flex-col  md:px-0 md:justify-between items-center mt-[25px] px-0 pt-2 sm:flex-row sm:space-y-0 sm:justify-center">
      <div className="flex items-center space-x-2 sm:hidden md:block">
        <div className="w-14 h-14 bg-custom-headerdaire rounded-full flex items-center justify-center dark:bg-custom-dark-daire ">
          <span
            className="text-custom-daire font-semibold text-[1.5rem] rotate-[25deg]
            dark:text-custom-dark-daireText 
          "
          >
            A
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 md:space-x-16 sm:space-x-8">
        <nav className="flex md:space-x-16 sm:space-x-8">
          <Link
            to="/profiles"
            className="text-custom-navbartext hover:text-none"
          >
            {headerData.title1}
          </Link>
          <Link
            to="/projects"
            className="text-custom-navbartext hover:text-none"
          >
            {headerData.title2}
          </Link>
          <Link
            to="/contact"
            className="text-custom-navbartext hover:text-none"
          >
            {headerData.title3}
          </Link>
        </nav>
        <Link
          className="md:px-4 md:py-2 sm:px-2 sm:py-1 text-custom-link border-1  border-custom-link rounded-md hover:text-custom-link  w-full sm:w-auto text-center dark:bg-custom-paragraf"
          to="/"
        >
          Hire me
        </Link>
      </div>
    </header>
  );
};

export default Header;
