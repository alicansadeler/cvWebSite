import { toast } from "react-toastify";
import { trData } from "../../data/trData";
import { euData } from "../../data/euData";

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

  try {
    dispatch(getDataTR(trData));
    toast.success("Veriler başarıyla yüklendi", {
      position: "top-center",
      autoClose: 1000,
    });
  } catch (error) {
    toast.error("Veri yüklenirken bir hata oluştu", {
      position: "top-center",
      autoClose: 2000,
    });
  } finally {
    dispatch(setLoading(false));
  }
};

export const getDataEuAPI = () => (dispatch) => {
  dispatch(setLoading(true));

  try {
    dispatch(getDataEU(euData));
    toast.success("Data loaded successfully", {
      position: "top-center",
      autoClose: 1000,
    });
  } catch (error) {
    toast.error("Error loading data", {
      position: "top-center",
      autoClose: 2000,
    });
  } finally {
    dispatch(setLoading(false));
  }
};
