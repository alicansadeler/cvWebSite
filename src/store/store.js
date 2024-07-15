import { applyMiddleware } from "redux";
import { legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./reducers/reducer";

const middleware = applyMiddleware(thunk);

export const myStore = legacy_createStore(reducer, middleware);
