import { useState } from "react";

export const useLocalStorage = (key, initialState) => {
  const [value, setValue] = useState(() => {
    const localValue = JSON.parse(localStorage.getItem(key));

    if (localValue === null) {
      localStorage.setItem(key, JSON.stringify(initialState));
      return initialState;
    } else {
      return localValue;
    }
  });

  const setLocal = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocal];
};
