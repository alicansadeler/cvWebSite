import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const myContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [dataEU, setDataEU] = useState([]);
  const [dataTR, setDataTR] = useState([]);

  useEffect(() => {
    axios
      .get("https://668bdc690b61b8d23b0b7836.mockapi.io/acs/activeeu")
      .then(function (response) {
        // handle success
        setDataEU(response.data);
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {
        // always executed
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://668bdc690b61b8d23b0b7836.mockapi.io/acs/activetr")
      .then(function (response) {
        // handle success
        setDataTR(response.data);
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <myContext.Provider value={{ dataEU, dataTR }}>
      {children}
    </myContext.Provider>
  );
};
