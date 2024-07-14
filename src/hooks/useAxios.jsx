import { useState } from "react";
import { API, REQ_TYPES } from "../api/api";

export const useAxios = (initialValue) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function doRequest(REQ_TYPE, url, payload, config) {
    const type = Object.keys(REQ_TYPES).includes(REQ_TYPE);

    setIsLoading(true);

    return API[tpye](url, payload, config)
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
};
