import { ACT_LANG, GET_EU, GET_TR } from "../actions/action";

const initialState = {
  data: [],
  active: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_LANG:
      return {
        ...state,
        active: !state.active,
      };
    case GET_TR:
      return {
        ...state,
        data: [action.payload],
      };
    case GET_EU:
      return {
        ...state,
        data: [action.payload],
      };
    default:
      return state;
  }
};
