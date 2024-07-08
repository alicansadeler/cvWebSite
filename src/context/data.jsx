import { createContext, useState } from "react";

export const myContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [dataTR, setDataTR] = useState([]);
  return (
    <myContext.Provider value={{ dataTR, setDataTR }}>
      {children}
    </myContext.Provider>
  );
};
