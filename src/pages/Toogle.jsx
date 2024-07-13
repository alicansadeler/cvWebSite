import { useDispatch, useSelector } from "react-redux";
import { actLang, getMode } from "../store/actions/action";
import { useEffect } from "react";

export const Toogle = () => {
  const activeMode = useSelector((store) => store.mode);
  const toggle = useSelector((store) => store.active);
  const dispatch = useDispatch();

  const toggleClick = () => {
    dispatch(actLang());
  };
  const modeClick = () => {
    dispatch(getMode());
  };
  useEffect(() => {
    if (activeMode) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [activeMode]);
  return (
    <>
      <div className="flex items-center justify-end  space-x-6  ">
        <label className="relative inline-flex items-center cursor-pointer px-0">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={modeClick}
            checked={activeMode}
          />

          <div className="w-11 h-6  rounded-full  peer-checked:border-custom-purple peer-checked:bg-custom-purple peer-focus:ring-4 peer-focus:ring-custom-purple dark:bg-custom-yellow peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-custom-yellow peer-checked:after:bg-custom-yellow after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
        </label>
        <span className="text-custom-toggletext font-semibold text-[15px]">
          {activeMode ? "DARK MODE" : "LİGHT MODE"}
        </span>
        <span className="text-custom-toggletext">|</span>
        <button
          onClick={toggleClick}
          className={`flex items-center  p-0 text-sm `}
        >
          <span className="text-custom-toggletext font-semibold text-[15px]">
            {toggle ? (
              <span>
                SWİTCH TO <span className="text-custom-purple">ENGLISH</span>{" "}
              </span>
            ) : (
              <span>
                {" "}
                <span className="text-custom-purple">TÜRKÇE</span>'YE GEÇ
              </span>
            )}
          </span>
        </button>
      </div>
    </>
  );
};
