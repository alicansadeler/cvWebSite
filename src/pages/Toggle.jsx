export const Toggle = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-end gap-4 md:gap-6 py-4 px-4 md:px-8">
      <div className="flex items-center gap-4">
        <label className="relative inline-flex cursor-pointer select-none items-center">
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

        <span className="text-sm md:text-base font-semibold dark:text-custom-dark-toggleSwitch">
          {activeMode ? "DARK MODE" : "LIGHT MODE"}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-custom-toggletext">|</span>
        <button
          onClick={toggleClick}
          className="text-sm md:text-base font-semibold"
        >
          {toggle ? (
            <span>
              SWITCH TO{" "}
              <span className="text-custom-purple dark:text-custom-dark-email">
                ENGLISH
              </span>
            </span>
          ) : (
            <span>
              <span className="text-custom-purple dark:text-custom-dark-email">
                TÜRKÇE
              </span>
              'YE GEÇ
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
