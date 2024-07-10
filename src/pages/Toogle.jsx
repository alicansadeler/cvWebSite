import { useDispatch, useSelector } from "react-redux";
import { actLang } from "../store/actions/action";
import { useState } from "react";

export const Toogle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggle = useSelector((store) => store.active);
  const dispatch = useDispatch();

  const toggleClick = () => {
    dispatch(actLang());
  };
  const modeClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className="flex items-center rounded-full p-1">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            data-testid="darkMode-toggle"
            onChange={modeClick}
            checked={darkMode}
          />
          <div className="w-11 h-6 rounded-full border-2 peer-checked:border-custom-purple peer-checked:bg-custom-purple peer-focus:ring-4 peer-focus:ring-custom-purple dark:bg-custom-yellow peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-custom-yellow peer-checked:after:bg-custom-yellow after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
        </label>
      </div>
      <button
        onClick={toggleClick}
        className={`flex items-center px-3 py-1 text-sm  bg-white`}
      >
        {toggle ? "ENGLISH" : "TÜRKÇE'YE GEÇ"}
      </button>
    </>
  );
};
