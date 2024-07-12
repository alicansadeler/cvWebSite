import axios from "axios";

export const GET_TR = "TR DATA GETIR";
export const GET_EU = "EU DATA GETIR";
export const ACT_LANG = "DATA DIL TERCIHI";
export const SET_LOADING = "SET_LOADING";
export const GET_MODE = "GET_MODE";

export const setLoading = (isLoading) => {
  return { type: SET_LOADING, payload: isLoading };
};

export const getMode = () => {
  return { type: GET_MODE };
};

export const getDataTR = (dataTr) => {
  return { type: GET_TR, payload: dataTr };
};

export const getDataEU = (dataEu) => {
  return { type: GET_EU, payload: dataEu };
};

export const actLang = () => {
  return { type: ACT_LANG };
};

export const getDataTrAPI = () => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get("https://668bdc690b61b8d23b0b7836.mockapi.io/acs/activetr")
    .then(function (response) {
      if (response.status === 200) {
        dispatch(getDataTR(response.data));
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error.message);
    })
    .finally(function () {
      // always executed
    });
};

export const getDataEuAPI = () => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get("https://668bdc690b61b8d23b0b7836.mockapi.io/acs/activeeu")
    .then(function (response) {
      if (response.status === 200) {
        dispatch(getDataEU(response.data));
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error.message);
    })
    .finally(function () {
      // always executed
    });
};
