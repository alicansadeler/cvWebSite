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
    <header className="p-4 bg-gray-100 flex justify-between items-center">
      <p className="text-xl font-bold">Header Page</p>
      <nav className="space-x-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <Link to="/projects" className="text-blue-600 hover:text-blue-800">
          Projects
        </Link>
        <Link to="/profiles" className="text-blue-600 hover:text-blue-800">
          Profiles
        </Link>
      </nav>
      <button
        onClick={toggleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {toggle ? "ENGLISH" : "TÜRKÇE'YE GEÇ"}
      </button>
    </header>
  );
};

export default Header;
