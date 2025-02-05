import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Header = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <LoadingSpinner />;
  }

  const headerData = data[0][0].header;

  return (
    <header className="flex flex-col md:flex-row items-center justify-between w-full py-6 px-4 md:px-8 gap-4">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <div className="w-12 h-12 bg-custom-headerdaire rounded-full flex items-center justify-center dark:bg-custom-dark-daire">
          <span className="text-custom-daire font-semibold text-2xl rotate-[25deg] dark:text-custom-dark-daireText">
            A
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <nav className="flex space-x-4 md:space-x-8">
          <Link
            to="/profiles"
            className="text-custom-navbartext hover:text-custom-link transition-colors"
          >
            {headerData.title1}
          </Link>
          <Link
            to="/projects"
            className="text-custom-navbartext hover:text-custom-link transition-colors"
          >
            {headerData.title2}
          </Link>
          <Link
            to="/contact"
            className="text-custom-navbartext hover:text-custom-link transition-colors"
          >
            {headerData.title3}
          </Link>
        </nav>
        <Link
          className="px-6 py-2 text-custom-link border border-custom-link rounded-md hover:bg-custom-link hover:text-white transition-colors w-full md:w-auto text-center dark:bg-custom-paragraf"
          to="/"
        >
          Hire me
        </Link>
      </div>
    </header>
  );
};

export default Header;
