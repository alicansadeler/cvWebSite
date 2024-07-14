import { ACT_LANG, GET_EU, GET_MODE, GET_TR } from "../actions/action";

const darkMode = () => {
  if (JSON.parse(localStorage.getItem("mode"))) {
    return true;
  } else {
    return false;
  }
};

const initialState = {
  data: [],
  active: JSON.parse(localStorage.getItem("active")) || false,
  loading: true,
  mode: darkMode(),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_LANG:
      const newActive = !state.active;
      localStorage.setItem("active", JSON.stringify(newActive));
      return {
        ...state,
        active: newActive,
      };

    case GET_TR:
      return {
        ...state,
        data: [action.payload],
        loading: false,
      };
    case GET_EU:
      return {
        ...state,
        data: [action.payload],
        loading: false,
      };
    case GET_MODE:
      const newMode = !state.mode;
      localStorage.setItem("mode", JSON.stringify(newMode));
      return {
        ...state,
        mode: newMode,
      };
    default:
      return state;
  }
};
