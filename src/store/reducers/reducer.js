import { ACT_LANG, GET_EU, GET_TR } from "../actions/action";

const initialState = {
  data: [],
  active: JSON.parse(localStorage.getItem("active")) || false,
  loading: true,
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
    default:
      return state;
  }
};
