import { combineReducers, createStore } from "redux";
import postIts from "./postIts";

const mainReducer = combineReducers({ postIts });
export default createStore(
  mainReducer,
  /*eslint-disable */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
