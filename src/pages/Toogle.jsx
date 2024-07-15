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
      <div className="md:flex md:items-center md:justify-end  md:space-x-6  md:mt-4 sm:mt-4 sm:justify-center  sm:flex sm:space-x-6">
        <label className="px-0 relative inline-flex cursor-pointer select-none items-center">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={modeClick}
            checked={activeMode}
          />
          <span
            className={`slider flex h-5 w-9 items-center rounded-full p-0.5 duration-200 ${
              activeMode ? "bg-custom-purple" : "bg-custom-dark-toggleDeActive"
            }`}
          >
            <span
              className={`dot h-4 w-4 rounded-full bg-yellow-500 duration-200 transform ${
                activeMode ? "translate-x-4" : ""
              } ${!activeMode ? "bg-half-moon" : ""}`}
            ></span>
          </span>
        </label>

        <span className="text-custom-toggletext font-semibold text-[0.938rem] dark:text-custom-dark-toggleSwitch">
          {activeMode ? "DARK MODE" : "LİGHT MODE"}
        </span>
        <span className="text-custom-toggletext">|</span>
        <button
          onClick={toggleClick}
          className={`flex items-center  p-0 text-sm `}
        >
          <span className="text-custom-toggletext font-semibold text-[0.938rem]">
            {toggle ? (
              <span>
                SWİTCH TO{" "}
                <span className="text-custom-purple dark:text-custom-dark-email">
                  ENGLISH
                </span>{" "}
              </span>
            ) : (
              <span>
                {" "}
                <span className="text-custom-purple dark:text-custom-dark-email">
                  TÜRKÇE
                </span>
                'YE GEÇ
              </span>
            )}
          </span>
        </button>
      </div>
    </>
  );
};
