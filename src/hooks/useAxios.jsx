import { useState } from "react";
import { API, reqTypes } from "../api/api.js";

export function useAxios(initialValue) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function doRequest(reqType, url, payload, config) {
    if (!Object.values(reqTypes).includes(reqType)) {
      setError("Error: not valid request type!..");
      return;
    }

    setIsLoading(true);
    return API[reqType](url, payload, config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return [data, isLoading, error, doRequest];
}
