import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actLang } from "../store/actions/action";

const Header = () => {
  const toggle = useSelector((store) => store.active);
  const dispatch = useDispatch();

  const toggleClick = () => {
    dispatch(actLang());
  };

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-purple-600 font-semibold">A</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <nav className="flex space-x-4">
          <Link to="/profiles" className="text-gray-600 hover:text-gray-800">
            Skills
          </Link>
          <Link to="/projects" className="text-gray-600 hover:text-gray-800">
            Projects
          </Link>
        </nav>
        <Link
          className="px-4 py-2 text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50"
          to="/"
        >
          Hire me
        </Link>
        <div className="flex items-center bg-gray-200 rounded-full p-1">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              data-testid="darkMode-toggle"
              checked
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3  font-medium text-gray-900 dark:text-gray-300">
              Dark Mode On
            </span>
          </label>
        </div>
        <button
          onClick={toggleClick}
          className={`flex items-center px-3 py-1 rounded-full text-sm ${
            !toggle ? "bg-white text-gray-800" : "text-gray-600"
          }`}
        >
          {toggle ? "ENGLISH" : "TÜRKÇE'YE GEÇ"}
        </button>
      </div>
    </header>
  );
};

export default Header;
